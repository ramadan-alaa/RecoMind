import "./sidebar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";
import useChatBot from "../../Context/ChatBotContext";
import { FaTrashAlt } from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast";

function Sidebar() {
	const [showSidebar, setShowSidebar] = useState(true);
	const {
		newChat,
		clearChatHistory,
		chatSessions,
		currentSessionId,
		loadSession,
		deleteSession,
	} = useChatBot();

  function handleSidebar() {
    setShowSidebar((show) => !show);
  }

	const handleNewChat = () => {
		newChat();
		toast.success("New chat started!");
	};

	const handleLoadSession = (sessionId) => {
		loadSession(sessionId);
    
	};

	const handleDeleteSession = (e, sessionId) => {
		e.stopPropagation(); // Prevent triggering loadSession

		toast.custom((t) => (
			<div className={`custom-toast ${t.visible ? "toast-show" : "toast-hide"}`}>
				<div className="toast-content">
					<p className="toast-title">Delete this chat?</p>
					<div className="toast-buttons">
						<button
							className="toast-btn confirm"
							onClick={() => {
								deleteSession(sessionId);
								toast.dismiss(t.id);
								toast.success("Chat deleted!");
							}}
						>
							Delete
						</button>
						<button className="toast-btn cancel" onClick={() => toast.dismiss(t.id)}>
							Cancel
						</button>
					</div>
				</div>
			</div>
		));
	};

	const handleClearHistory = () => {
		toast.custom((t) => (
			<div className={`custom-toast ${t.visible ? "toast-show" : "toast-hide"}`}>
				<div className="toast-content">
					<p className="toast-title">Clear all chat history?</p>
					<p className="toast-subtitle">This will delete all your conversations</p>
					<div className="toast-buttons">
						<button
							className="toast-btn confirm"
							onClick={() => {
								clearChatHistory();
								toast.dismiss(t.id);
								toast.success("All chats cleared!");
							}}
						>
							Clear All
						</button>
						<button className="toast-btn cancel" onClick={() => toast.dismiss(t.id)}>
							Cancel
						</button>
					</div>
				</div>
			</div>
		));
	};

	// Format date for display
	const formatDate = (dateString) => {
		const date = new Date(dateString);
		const now = new Date();
		const diffTime = Math.abs(now - date);
		const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

		if (diffDays === 0) return "Today";
		if (diffDays === 1) return "Yesterday";
		if (diffDays < 7) return `${diffDays} days ago`;
		if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
		return date.toLocaleDateString();
	};

	// Group sessions by date
	const groupedSessions = chatSessions.reduce((groups, session) => {
		const dateLabel = formatDate(session.createdAt);
		if (!groups[dateLabel]) {
			groups[dateLabel] = [];
		}
		groups[dateLabel].push(session);
		return groups;
	}, {});

	return (
		<div className="sidebar">
			<Toaster position="top-center" />

			<div className="top">
				<img onClick={handleSidebar} className="menu" src={assets.menu_icon} alt="Menu" />

				<div onClick={handleNewChat} className="new-chat">
					<img src={assets.plus_icon} alt="New chat" />
					{showSidebar && <p>New Chat</p>}
				</div>

				{showSidebar && (
					<div className="recent">
						<div className="recent-header">
							<p className="recent-title">Chats</p>
						</div>

						{chatSessions.length > 0 ? (
							Object.entries(groupedSessions).map(([dateLabel, sessions]) => (
								<div key={dateLabel} className="session-group">
									<p className="date-label">{dateLabel}</p>
									{sessions.map((session) => (
										<div
											onClick={() => handleLoadSession(session.id)}
											className={`recent-entry ${
												currentSessionId === session.id ? "active" : ""
											}`}
											key={session.id}
										>
											<img src={assets.message_icon} alt="Chat" />
											<p className="session-title">{session.title}</p>
											<button
												className="delete-session-btn"
												onClick={(e) => handleDeleteSession(e, session.id)}
												title="Delete chat"
											>
												<FaTrashAlt size={12} />
											</button>
										</div>
									))}
								</div>
							))
						) : (
							<p className="no-recent">No chats yet</p>
						)}
					</div>
				)}
			</div>

			<div className="bottom">
				{chatSessions.length > 0 && (
					<div onClick={handleClearHistory} className="bottom-item recent-entry">
						<button className="clear-history-btn" title="Clear all history">
							<FaTrashAlt size={14} />
						</button>
						{showSidebar && <p>Clear All History</p>}
					</div>
				)}
			</div>
		</div>
	);
}

export default Sidebar;
