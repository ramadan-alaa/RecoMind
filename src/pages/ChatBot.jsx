import Sidebar from "../components/Sidebar/Sidebar";
import Main from "../components/Main/Main";
import { ChatBotContextProvider } from "../Context/ChatBotContext";

const ChatBot = () => {
  return (
    <div>
      <ChatBotContextProvider>
        <div className="flex">
          <Sidebar />
          <Main />
        </div>
      </ChatBotContextProvider>
    </div>
  );
};

export default ChatBot;
