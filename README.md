# Kaplan Business School - Interactive Content Card System

A mobile-first, interactive platform designed to connect prospective students with student ambassadors, inspired by IDP.com and modern social feeds. This prototype focuses on engagement, seamless navigation, and conversion through a polished, "one thumb, one eye" optimized interface.

## 📱 Project Overview

This application serves as a bridge between prospective students and university life, featuring:
- **Authentic Content:** A social-style feed of student stories and experiences.
- **Direct Connection:** Seamless access to student ambassadors for Q&A.
- **Course Discovery:** Integrated pathways to explore universities and make enquiries.
- **Personalization:** A "Dreamwall" to save and collect inspirational content.

## ✨ Key Features

### 1. Student Life Feed
- Instagram-style content cards with rich media support.
- Interactive elements: Like, Save (Dreamwall), and "Ask me a question" directly from the feed.
- Smart context: Tags and related content suggestions.

### 2. Ambassador Profiles
- Detailed bios with university affiliation, country of origin, and interests.
- Complete post history for each ambassador.
- Sidebar navigation to other ambassadors from the same institution.
- Sticky "Ask me a question" CTA on mobile for instant engagement.

### 3. University Profiles & Enquiry
- Comprehensive university landing pages with campus info and ambassador directories.
- **"Enquire Now"** workflow: A detailed, multi-step form for course interest (About You, Study Preferences, Enquiry Details).
- Client-side validation and success feedback.

### 4. Q&A Section
- A knowledge base of student-answered questions.
- Categorized topics (Student Life, Accommodation, Visa, etc.).
- Video answers and rich text support.
- Direct links to ambassador and university profiles from every answer.

### 5. Dreamwall
- Personal bookmarking system for posts.
- LocalStorage persistence to save user preferences during the session.
- Toast notifications with quick actions.

## 🛠️ Tech Stack

- **Frontend:** React 18, TypeScript, Vite
- **Styling:** Tailwind CSS, Shadcn/UI, Lucide Icons
- **Animation:** Framer Motion for smooth transitions and micro-interactions
- **Routing:** Wouter (Lightweight routing for mobile performance)
- **State:** React Query & Local State

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open the application:**
   The app will be available at `http://0.0.0.0:5000`.

## 📱 Mobile-First Design Philosophy

The interface adheres to "One Thumb, One Eye" principles:
- **Bottom-heavy navigation:** Key actions are within easy reach.
- **Sticky CTAs:** Primary conversion buttons (Enquire, Ask) remain visible while scrolling.
- **Touch targets:** Expanded tap areas (>44px) for frustration-free mobile use.
- **No Modals:** All interactions use dedicated pages or slide-overs to feel native in mobile webviews.

---
*Designed for Kaplan Business School Prototype*
