"use client";
import { FaUserGraduate, FaTools, FaLightbulb, FaProjectDiagram } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import "./page.css";
import { useEffect, useState } from "react";

const sections = [
	{
		icon: <FaTools className="section-icon" aria-hidden="true" />,
		title: "Skills",
		content: (
			<ul>
				<li>Programming Languages: C, Python, Java, JavaScript</li>
				<li>Web Development: HTML, CSS, JavaScript, React, Next.js</li>
				<li>Problem Solving: LeetCode</li>
				<li>Tools & Technologies: Git, GitHub, VS Code</li>
			</ul>
		),
	},
	{
		icon: <MdSchool className="section-icon" aria-hidden="true" />,
		title: "Education",
		content: (
			<ul>
				<li>
					B.Tech in Computer Science and Engineering, Government College of Engineering, Kannur (2022 - Present)
				</li>
				<li>
				 B.S in Data Science and Applications, IITM online degree (2021-present)
				</li>
			</ul>
		),
	},
	{
		icon: <FaLightbulb className="section-icon" aria-hidden="true" />,
		title: "Interests",
		content: (
			<ul>
				<li>Web Development</li>
				<li>Problem Solving</li>
			</ul>
		),
	},
	{
		icon: <FaProjectDiagram className="section-icon" aria-hidden="true" />,
		title: "Projects",
		content: (
			<ul>
				<li>
					<a href="#" aria-label="ReVeal project details">
						ReVeal
					</a>{" "}
					– A web application for the Police Department of Kerala, designed to digitalize the process of disposal of vehicles which are seized by the police.
				</li>
				<li>
					<a
						href="https://github.com/nakshathra2004/webproject"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="View Web Project on GitHub"
					>
						Web Project
					</a>{" "}
					– A simple web project showcasing my skills in HTML, CSS, and JavaScript.
				</li>
			</ul>
		),
	},
];

function SectionCard({ icon, title, content }) {
	return (
		<section className="card-section" tabIndex={0} aria-label={title}>
			<h2>
				{icon} {title}
			</h2>
			{content}
		</section>
	);
}

export default function Page() {
	return (
		<main className="page-container" aria-label="Portfolio Main Content">
			<header>
				<h1 tabIndex={0}>Hi, I'm Nakshathra Nambiar</h1>
				<h4 tabIndex={0}>Or... just nat if that's easier :p</h4>
			</header>

			<section className="about-section" aria-label="About Me">
				<h2>
					<FaUserGraduate className="section-icon" aria-hidden="true" /> About Me
				</h2>
				<p>
					I'm a 20-year-old Computer Science and Engineering student at Government College of Engineering, Kannur.
					<br />
					Passionate about coding and problem-solving, I love exploring new technologies and applying them to real-world projects.
					<br />
					My interest in web development has led me to build with HTML, CSS, and JavaScript, and am currently diving into React and Next.js.
				</p>
			</section>

			<div className="interactive-sections" aria-label="Skills, Education, Interests, Projects">
				{sections.map((section) => (
					<SectionCard key={section.title} {...section} />
				))}
			</div>

			<footer>
				<p className="note">
					Feel free to connect with me on{" "}
					<a
						href="https://www.linkedin.com/in/nakshathra-nambiar/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn profile of Nakshathra Nambiar"
					>
						LinkedIn
					</a>
					!
				</p>
			</footer>
		</main>
	);
}