import type React from "react";
import { Routes, Route, Navigate} from "react-router-dom"

import { HomePage } from "../Pages/HomePage";
import { SkillsPage } from "../Pages/SkillsPage";
import { Blog } from "../Pages/Blog";
import { Contact } from "../Pages/Contact";
import { Projects } from "../Pages/Projects";
import { Journey } from "../Pages/Journey";

export const AppRoutes: React.FC = () => {
    return (
        <Routes>

            {/* Home Route */}
            <Route path="/" element={<HomePage />} />

            {/* Main Route */}
            <Route path="skills" element={<SkillsPage />} />
            <Route path="journey" element={<Journey />} />
            <Route path="projects" element={<Projects />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />

            {/* Fallback Route */}
            <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
    )
}