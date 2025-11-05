import "./main.css";
import { assets } from "../../assets/assets";
import { useChatBot } from "../../Context/ChatBotContext";
import { useEffect, useRef } from "react";

function Main() {
	const {
		handleSent,
		setInput,
		input,
		showResult,
		loading,
		messages, // NEW: Get all messages
	} = useChatBot();

	// Auto-scroll to bottom when new messages arrive
	const messagesEndRef = useRef(null);

	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages, loading]);

	const cards = [
		{
			text: "Suggest beautiful places to see on an upcoming road trip",
			icon: assets.compass_icon,
			id: 1,
		},
		{
			text: "Briefly summarize this concept: urban planning",
			icon: assets.bulb_icon,
			id: 2,
		},
		{
			text: "Brainstorm team bonding activities for our work retreat",
			icon: assets.message_icon,
			id: 3,
		},
		{
			text: "Improve the readability of the following code",
			icon: assets.code_icon,
			id: 4,
		},
	];

	const handleCardClick = (cardText) => {
		setInput(cardText);
		handleSent(cardText);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!loading && input.trim()) {
			handleSent(input);
		}
	};

	const handleSendClick = () => {
		if (!loading && input.trim()) {
			handleSent(input);
		}
	};

	return (
		<main className="main">
			<nav className="nav">
				<p>Gemini</p>
				<img src={assets.user_icon} alt="User profile" />
			</nav>

			<div className="main-container">
				{!showResult ? (
					<>
						<div className="greet">
							<p>
								<span>Hello, dev</span>
							</p>
							<p>How can I help you today?</p>
						</div>
						<div className="cards">
							{cards.map((card) => (
								<div
									className="card"
									onClick={() => handleCardClick(card.text)}
									key={card.id}
									role="button"
									tabIndex={0}
									onKeyDown={(e) => {
										if (e.key === "Enter" || e.key === " ") {
											handleCardClick(card.text);
										}
									}}
								>
									<p>{card.text}</p>
									<img src={card.icon} alt="" aria-hidden="true" />
								</div>
							))}
						</div>
					</>
				) : (
					<div className="result">
						{/* Display all messages in sequence */}
						{messages.map((message) => (
							<div key={message.id} className={`message-wrapper ${message.type}`}>
								{message.type === "user" ? (
									<div className="result-title">
										<img src={assets.user_icon} alt="User" />
										<p>{message.content}</p>
									</div>
								) : (
									<div className="result-data">
										<img src={assets.gemini_icon} alt="Gemini AI" />
										<p
											dangerouslySetInnerHTML={{ __html: message.content }}
										></p>
									</div>
								)}
							</div>
						))}

						{/* Show loader only when AI is thinking */}
						{loading && (
							<div className="result-data">
								<img src={assets.gemini_icon} alt="Gemini AI" />
								<div className="loader" role="status" aria-label="Loading response">
									<hr />
									<hr />
									<hr />
								</div>
							</div>
						)}

						{/* Auto-scroll anchor */}
						<div ref={messagesEndRef} />
					</div>
				)}

				<div className="main-bottom">
					<div className="search-box">
						<form onSubmit={handleSubmit}>
							<input
								type="text"
								value={input}
								disabled={loading}
								onChange={(e) => setInput(e.target.value)}
								placeholder="Enter your message here"
								aria-label="Chat message input"
							/>
						</form>
						<div className="input-actions">
							<img
								src={assets.gallery_icon}
								alt="Upload image"
								role="button"
								tabIndex={0}
							/>
							<img
								src={assets.mic_icon}
								alt="Voice input"
								role="button"
								tabIndex={0}
							/>
							<img
								src={assets.send_icon}
								alt="Send message"
								onClick={handleSendClick}
								role="button"
								tabIndex={0}
								onKeyDown={(e) => {
									if (e.key === "Enter" || e.key === " ") {
										handleSendClick();
									}
								}}
								style={{
									cursor: loading ? "not-allowed" : "pointer",
									opacity: loading ? 0.6 : 1,
									transition: "opacity 0.2s ease",
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Main;
