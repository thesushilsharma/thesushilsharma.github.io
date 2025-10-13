"use client";

import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { AnimatedSection } from "./animations/animated-section";

const workData = [
  {
    title: "Software Engineer",
    company: "PropFi",
    duration: "May 2025 - Present",
    description: "Developed a tokenized real estate platform on Ethereum (Base) with secure APIs using TypeScript & Node.js. Built responsive frontend with Next.js, React, and Tailwind. Integrated Swagger, end-to-end encryption, and Firebase Cloud Messaging.",
    position: new THREE.Vector3(0, 5, 0),
  },
  {
    title: "Software Engineer",
    company: "Web3Ocean",
    duration: "May 2024 - April 2025",
    description: "Developed scalable apps and RESTful APIs using TypeScript, Node.js, Express, Next.js, and React. Built crypto trading solutions and blockchain apps (Ethereum, Solana, Sui) using Ethers.js. Created Telegram bots and integrated third-party APIs.",
    position: new THREE.Vector3(4, 3.5, -2),
  },
  {
    title: "IT Support Intern",
    company: "Middle East Communications Networks",
    duration: "Apr 2023 - Oct 2023",
    description: "Provided technical support for hardware, software, Azure VDI, and Windows servers. Configured new employee laptops, delivered IT training programs, and leveraged Power BI to analyze IT data and optimize operations.",
    position: new THREE.Vector3(-3, 2, 3),
  },
  {
    title: "Software Engineer",
    company: "Sunlight Events Organizing L.L.C",
    duration: "Dec 2021 - Mar 2023",
    description: "Developed and maintained secure, high-performing company website with MySQL and MongoDB integration. Implemented web analytics solutions and provided extensive IT support including hardware and software troubleshooting.",
    position: new THREE.Vector3(3.5, 0.5, -3),
  },
  {
    title: "Web and IT Support",
    company: "Ask International Group",
    duration: "Jan 2021 - Nov 2021",
    description: "Built and hosted website, configured mail server and DNS, integrated Cloudflare for security. Utilized SQL for database management and provided technical support. Optimized website performance with SEO strategies, achieving 15% increase in organic traffic.",
    position: new THREE.Vector3(-4, -1, 2.5),
  },
  {
    title: "Junior Web Developer",
    company: "Global Valve Solution",
    duration: "Sept 2020 - Dec 2020",
    description: "Collaborated with development team to build and maintain user-friendly company website. Implemented new features including API integration and efficient page routing, enhancing user experience and functionality.",
    position: new THREE.Vector3(2.5, -2.5, -2.5),
  },
  {
    title: "Web Programmer",
    company: "Mad About Dance",
    duration: "Mar 2019 - Sept 2020",
    description: "Designed and developed responsive websites offering optimal user experience across various devices. Increased website traffic through effective SEO and web analytics strategies. Integrated Cloudflare services for enhanced security and performance.",
    position: new THREE.Vector3(-2, -4, 1.5),
  },
];

export function WorkExperienceSection() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [selectedJob, setSelectedJob] = useState<(typeof workData)[0] | null>(workData[0]);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    const jobObjects: THREE.Mesh[] = [];
    const group = new THREE.Group();

    workData.forEach((job, index) => {
      // Create different sphere sizes and colors based on job seniority and type
      const isCurrentJob = index === 0;
      const isSeniorRole = job.title.toLowerCase().includes('engineer') && !job.title.toLowerCase().includes('intern');
      const isInternship = job.title.toLowerCase().includes('intern');

      const sphereSize = isCurrentJob ? 1.3 : isSeniorRole ? 1.1 : isInternship ? 0.8 : 1.0;
      const geometry = new THREE.SphereGeometry(sphereSize, 32, 32);

      // Color coding: Current job (gold), Senior roles (teal), Internships (purple), Others (blue)
      let color = 0x4f46e5; // Default blue
      if (isCurrentJob) color = 0xf59e0b; // Gold for current
      else if (isSeniorRole) color = 0x06b6d4; // Cyan for senior roles
      else if (isInternship) color = 0x8b5cf6; // Purple for internships

      const material = new THREE.MeshStandardMaterial({
        color: color,
        roughness: 0.3,
        metalness: 0.7,
        emissive: isCurrentJob ? 0x332211 : 0x000000,
      });

      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.copy(job.position);
      sphere.userData = { id: index, job };
      jobObjects.push(sphere);
      group.add(sphere);

      // Add a subtle glow ring for current job
      if (isCurrentJob) {
        const ringGeometry = new THREE.RingGeometry(1.5, 1.7, 32);
        const ringMaterial = new THREE.MeshBasicMaterial({
          color: 0xf59e0b,
          transparent: true,
          opacity: 0.3,
          side: THREE.DoubleSide,
        });
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        ring.position.copy(job.position);
        ring.lookAt(camera.position);
        group.add(ring);
      }
    });

    scene.add(group);

    // Create smooth curved connections between jobs
    for (let i = 0; i < jobObjects.length - 1; i++) {
      const start = jobObjects[i].position;
      const end = jobObjects[i + 1].position;

      // Create a smooth curve with control points for better flow
      const midPoint = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
      const offset = new THREE.Vector3(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2
      ).multiplyScalar(0.5);
      midPoint.add(offset);

      const curve = new THREE.CatmullRomCurve3([start, midPoint, end]);
      const tubeGeometry = new THREE.TubeGeometry(curve, 64, 0.08, 8, false);

      // Gradient-like effect by varying opacity along the timeline
      const opacity = 0.3 + (i / jobObjects.length) * 0.4;
      const lineMaterial = new THREE.MeshBasicMaterial({
        color: 0x6366f1,
        transparent: true,
        opacity: opacity
      });

      const line = new THREE.Mesh(tubeGeometry, lineMaterial);
      group.add(line);
    }


    // Enhanced lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // Main spotlight following the current job
    const spotLight = new THREE.SpotLight(0xf59e0b, 30, 50, Math.PI / 6, 0.3);
    spotLight.position.set(5, 8, 5);
    spotLight.target.position.copy(workData[0].position);
    scene.add(spotLight);
    scene.add(spotLight.target);

    // Accent lights for depth
    const pointLight1 = new THREE.PointLight(0x06b6d4, 15, 30);
    pointLight1.position.set(8, 5, -8);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x8b5cf6, 12, 25);
    pointLight2.position.set(-8, -5, 8);
    scene.add(pointLight2);

    // Rim light for better definition
    const rimLight = new THREE.DirectionalLight(0xffffff, 0.5);
    rimLight.position.set(-10, 10, -10);
    scene.add(rimLight);

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-100, -100); // Initialize off-screen
    let intersected: THREE.Object3D | null = null;

    const onMouseMove = (event: MouseEvent) => {
      if (!currentMount) return;
      const rect = currentMount.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / currentMount.clientWidth) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / currentMount.clientHeight) * 2 + 1;
    };
    currentMount.addEventListener('mousemove', onMouseMove);

    const onClick = () => {
      if (intersected) {
        setSelectedJob(intersected.userData.job);
      }
    }
    currentMount.addEventListener('click', onClick);


    const handleResize = () => {
      if (currentMount) {
        camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
      }
    };
    window.addEventListener("resize", handleResize);

    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;

      // Smooth, organic rotation
      group.rotation.y += 0.002;
      group.rotation.x = Math.sin(time * 0.3) * 0.1;
      group.rotation.z = Math.cos(time * 0.2) * 0.05;

      // Animate individual spheres with subtle floating motion
      jobObjects.forEach((sphere, index) => {
        const originalY = workData[index].position.y;
        sphere.position.y = originalY + Math.sin(time + index * 0.5) * 0.1;

        // Subtle pulsing for current job
        if (index === 0) {
          const scale = 1 + Math.sin(time * 2) * 0.05;
          sphere.scale.setScalar(scale);
        }
      });

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(jobObjects);

      if (intersects.length > 0) {
        if (intersected !== intersects[0].object) {
          // Reset previous intersection
          if (intersected && intersected instanceof THREE.Mesh) {
            intersected.material.emissive.setHex(0x000000);
            intersected.scale.setScalar(1);
          }

          // Highlight new intersection
          intersected = intersects[0].object;
          if (intersected instanceof THREE.Mesh) {
            intersected.material.emissive.setHex(0x444444);
            intersected.scale.setScalar(1.2);
          }
          currentMount.style.cursor = 'pointer';
        }
      } else {
        if (intersected && intersected instanceof THREE.Mesh) {
          intersected.material.emissive.setHex(0x000000);
          intersected.scale.setScalar(1);
        }
        intersected = null;
        currentMount.style.cursor = 'default';
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      currentMount.removeEventListener('mousemove', onMouseMove);
      currentMount.removeEventListener('click', onClick);
      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <AnimatedSection id="work-experience">
      <div className="flex flex-col items-center text-center space-y-4 mb-8">
        <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl">Work Experience</h2>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          An interactive timeline of my professional journey. Click on the nodes to see details.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div ref={mountRef} className="md:col-span-2 h-[400px] md:h-[500px] w-full rounded-lg border bg-card" />
        <div className="md:col-span-1">
          {selectedJob ? (
            <Card className="shadow-lg bg-card/50 backdrop-blur-sm transition-all duration-500">
              <CardHeader>
                <CardTitle>{selectedJob.title}</CardTitle>
                <CardDescription>{selectedJob.company} | {selectedJob.duration}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{selectedJob.description}</p>
              </CardContent>
            </Card>
          ) : (
            <div className="flex items-center justify-center h-full text-muted-foreground">
              <p>Select a node to see job details.</p>
            </div>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
}
