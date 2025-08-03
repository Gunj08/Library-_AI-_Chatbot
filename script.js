const bookData = [
  { book_name: "Operating System Concepts", subject: "OS", semester: "3", course: "BCA", available: true },
  { book_name: "DBMS by Korth", subject: "DBMS", semester: "4", course: "B.Tech", available: true },
  { book_name: "Let Us C", subject: "C Programming", semester: "1", course: "BCA", available: false },
  { book_name: "Data Structures in C", subject: "DSA", semester: "2", course: "BSc IT", available: true },
  { book_name: "Python Crash Course", subject: "Python", semester: "2", course: "BCA", available: true },
  { book_name: "Computer Networks", subject: "Networking", semester: "5", course: "B.Tech", available: true },
  { book_name: "Cloud Computing Basics", subject: "Cloud", semester: "6", course: "BSc CS", available: false }
];

function sendMessage() {
  const inputBox = document.getElementById("user-input");
  const query = inputBox.value.trim();
  if (query === "") return;

  addMessage("You", query);

  const chatLog = document.getElementById("chat-log");
  const typingDiv = document.createElement("div");
  typingDiv.className = "bot-typing";
  typingDiv.id = "typing";
  typingDiv.innerText = "Bot is typing...";
  chatLog.appendChild(typingDiv);
  chatLog.scrollTop = chatLog.scrollHeight;

  setTimeout(() => {
    typingDiv.remove();
    const response = findBook(query.toLowerCase());
    addMessage("Bot", response);
  }, 1000);

  inputBox.value = "";
}

function addMessage(sender, text) {
  const chatLog = document.getElementById("chat-log");
  const message = document.createElement("div");
  message.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatLog.appendChild(message);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function findBook(query) {
  for (let book of bookData) {
    if (query.includes(book.subject.toLowerCase()) || query.includes(book.semester)) {
      return book.available
        ? `✅ "${book.book_name}" is available for ${book.course}, Semester ${book.semester}.`
        : `❌ "${book.book_name}" is not currently available.`;
    }
  }
  return "❓ Sorry, no matching book found. Please specify semester and subject.";
}
