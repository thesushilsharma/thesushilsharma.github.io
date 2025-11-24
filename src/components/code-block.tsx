"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import TypingText from "./animations/typing-text";

// ------------------ TAB DATA ------------------

const TABS = [
  {
    id: "cpp",
    label: "solver.cpp",
    code: `#include <iostream>
#include <vector>
#include <algorithm>

template <typename T>
class MatrixSolver {
public:
    void optimize(std::vector<T>& data) {
        // SIMD-optimized parallel processing
        #pragma omp parallel for
        for (size_t i = 0; i < data.size(); ++i) {
            data[i] = compute_gradient(data[i]);
        }
    }

private:
    T compute_gradient(T value) {
        return value * 0.99f + 0.01f; // Momentum
    }
};`,
  },
  {
    id: "blockchain",
    label: "contract.ts",
    code: `import { useContractRead, useContractWrite } from 'wagmi'
import { parseEther } from 'viem'
import { abi } from './abi'

export function useSwap() {
  const { writeAsync } = useContractWrite({
    address: '0x...',
    abi,
    functionName: 'swapExactTokensForETH'
  })

  const handleSwap = async (amount: string) => {
    try {
      await writeAsync({
        args: [parseEther(amount), 0n, [], Date.now()],
        value: 0n,
      })
    } catch (err) {
      console.error("Transaction failed", err)
    }
  }

  return { handleSwap }
}`,
  },
  {
    id: "jupyter",
    label: "analysis.ipynb",
    code: `import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Load blockchain transaction data
df = pd.read_csv('transactions.csv')

# Analyze gas fee trends
plt.figure(figsize=(12, 6))
sns.lineplot(data=df, x='block_number', y='gas_price')
plt.title('Gas Price Volatility (7D)')
plt.show()

# Calculate moving average
df['ma_50'] = df['gas_price'].rolling(window=50).mean()
print(df.head())`,
  },
];

// ------------------ TYPEWRITER ------------------

export default function CodeBlock() {
  const [activeTab, setActiveTab] = useState(0);
  const [key, setKey] = useState(0);

  // autoplay tab switching
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % TABS.length);
      setKey((k) => k + 1);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const code = TABS[activeTab].code;

  return (
    <div className="relative w-full max-w-3xl mx-auto mt-10 select-none">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden rounded-xl bg-[#0B0B0D] border border-white/10 shadow-[0_0_80px_-20px_rgba(255,255,255,0.1)]"
      >
        {/* TERMINAL HEADER */}
        <div className="flex justify-between items-center px-4 py-2 border-b border-white/10 bg-white/5">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
            <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
            <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
          </div>

          {/* TABS */}
          <div className="flex items-center gap-4">
            {TABS.map((tab, i) => (
              <motion.button
                key={tab.id}
                onClick={() => {
                  setActiveTab(i);
                  setKey((k) => k + 1);
                }}
                className={`text-xs font-mono px-2 py-1 rounded-md transition ${activeTab === i
                    ? "bg-white/10 text-white"
                    : "text-zinc-500 hover:text-zinc-300"
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>

          <div className="w-6" />
        </div>

        {/* CODE WINDOW */}
        <div className="relative p-4 overflow-hidden min-h-[260px]">
          <pre className="text-[11.5px] leading-relaxed font-mono text-zinc-100 whitespace-pre-wrap overflow-hidden">
            <TypingText
              key={key}
              text={code}
              as="span"
              typingSpeed={25}
              loop={false}
              showCursor={true}
              cursorClassName="h-4"
              variableSpeed={{ min: 8, max: 25 }}
              className="inline-block"
            />
          </pre>

          {/* glossy overlay */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/2 to-transparent" />
        </div>
      </motion.div>
    </div>
  );
}