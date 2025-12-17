import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import SignupPage from "../pages/SignupPage";
import MainLayout from "../layouts/MainLayout"
import HomeScreen from "../pages/HomeScreen";
import Explorer from "../pages/Explorer";
import Dashboard from "../pages/DashboardFeedPage";
import AddIdea from "../pages/AddEditIdea";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignupPage />} />

            <Route
                path="/home"
                element={
                    <MainLayout>
                        <HomeScreen />
                    </MainLayout>
                }
            />
            <Route
                path="/explore"
                element={
                    <MainLayout>
                        <Explorer />
                    </MainLayout>
                }
            />
            <Route
                path="/dashboard"
                element={
                    <MainLayout>
                        <Dashboard />
                    </MainLayout>
                }
            />

            <Route path="/add-idea" element={<MainLayout><AddIdea /></MainLayout>} />
        </Routes>
    );
}
