// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import { useState } from 'react'
// import { ChatInput } from './components/ChatInput';
// import RobotProfilePic from './assets/robot.png';
// import UserProfilePic from './assets/user.png';
// import './App.css'




// // props = properties of an object, contains the attributes of X element
// function ChatMessage({ message, sender}) {      
//   // const { message, sender } = props;
//   // same as { message, sender }  on function
  

//   /* if (sender === 'bot') {
//     return (
//       <div>
//         <img src="../styles/images/robot.png" width="50" />
//         {message}
//       </div>
//     );
//   }
//   */

//   return(
//     <div className={
//       sender === 'user' 
//         ? 'chat-message-user' 
//         : 'chat-message-bot'
//     }>
//       {sender === 'bot' && (
//         <img src={RobotProfilePic} className="chat-message-profile" />
//       )}
      
//       <div className="chat-message-text">
//         {message}
//       </div>
//       {sender === 'user' && (
//         <img src={UserProfilePic} className="chat-message-profile" />
//       )}
//     </div>
//   );
// }

// function ChatMessages({ chatMessages}) {
//   return(
//     <>
//         {chatMessages.map((chatMessage) => {
//         return(
//           <ChatMessage
//             message={chatMessage.message}
//             sender={chatMessage.sender}
//             key={chatMessage.id}
//           />
//         );
//       })}
//     </>
//   );
  
// }

// function App() {
//     const [chatMessages, setChatMessages] = useState(
//     [{
//       message: 'hello chatbot',
//       sender: 'user',
//       id:crypto.randomUUID() 
//     }, {
//       message:'Hello! How can i help you?',
//       sender:'bot',
//       id:crypto.randomUUID() 
//     }, {
//       message:'can you get me todays date?',
//       sender:'user',
//       id:crypto.randomUUID() 
//     }, {
//       message:'Today is September 27:', 
//       sender:'bot',
//       id:crypto.randomUUID() 
//     }]);
//   // const [chatMessages, setChatMessages] = array; // shortcut ^
//   //chatmessages gets first value of the array, setchat gets second
//   // const chatMessages = array[0]; //shortcut v^
//   // const setChatMessages = array[1];


//   return (
//     <div className="app-container">
//       <ChatInput
//         chatMessages={chatMessages}
//         setChatMessages={setChatMessages} 
//       />
//       <ChatMessages
//         chatMessages={chatMessages}
//       />
//   </div>
//   );
// } 

// export default App
