const header = document.querySelector("#heading")
const changeFontColor = () => {
    header.classList.toggle("blue-text")
}

header.addEventListener("click", changeFontColor)

const subtitle = document.querySelector("#subheading")
changeSubtitleColor = () => {
    subtitle.classList.toggle("blue-text")
}
subtitle.addEventListener("click", changeSubtitleColor)

const replyBtn = document.querySelector("#reply-button")
const replyMsg= document.querySelector("#reply-message")

const showReply = () => {
    replyMsg.classList.remove("hidden")
}
const hideReply = () => {
    replyMsg.classList.add("hidden")
}
replyBtn.addEventListener("click", showReply)

const sendBtn = document.querySelector("#send-button")
const cancelBtn = document.querySelector("#cancel-button")

sendBtn.addEventListener("click", hideReply)
cancelBtn.addEventListener("click", hideReply)

const openBtn = document.querySelector("#open-button")
const inbox = document.querySelector("#inbox")
const inboxMessage = document.querySelector("#inbox-message")
const unreadBtn = document.querySelector("#mark-button")

const openMessage = () => {
    inbox.classList.add("is-read")
    inboxMessage.classList.remove("hidden")
    unreadBtn.classList.remove("hidden")
}

openBtn.addEventListener("click", openMessage)

const closeBtn = document.querySelector("#close")
const hideMessage = () => {
    inboxMessage.classList.add("hidden")
    unreadBtn.classList.add("hidden")
}

closeBtn.addEventListener("click", hideMessage)

const markUnread = () => {
    inboxMessage.classList.add("hidden")
    inbox.classList.remove("is-read")
    unreadBtn.classList.add("hidden")
}

unreadBtn.addEventListener("click", markUnread)



const checkbox = document.querySelector("#checkbox")
const actionButtons = document.querySelector("#action-buttons")

const handleCheckbox = () => {
    inbox.classList.toggle("is-selected")
    actionButtons.classList.toggle("hidden")
}

checkbox.addEventListener("click", handleCheckbox)