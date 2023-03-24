console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

let newSocialMediaPost = document.createElement("article");
newSocialMediaPost.classList.add("post");

let newSocialMediaPostText = document.createElement("p");
newSocialMediaPostText.classList.add("post__content");
newSocialMediaPostText.innerText =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

let newSocialMediaPostFooter = document.createElement("footer");
newSocialMediaPostFooter.classList.add("post__footer");

let newSocialMediaPostUsername = document.createElement("span");
newSocialMediaPostUsername.classList.add("post__username");
newSocialMediaPostUsername.innerText = "@username2";

let newSocialMediaPostButton = document.createElement("button");
newSocialMediaPostButton.type = "button";
newSocialMediaPostButton.setAttribute("data-js", "like-button");
newSocialMediaPostButton.classList.add("post__button");
newSocialMediaPostButton.innerText = "♥ Like";

newSocialMediaPost.appendChild(newSocialMediaPostText);

newSocialMediaPostFooter.appendChild(newSocialMediaPostUsername);
newSocialMediaPostFooter.appendChild(newSocialMediaPostButton);
newSocialMediaPost.appendChild(newSocialMediaPostFooter);

document.body.append(newSocialMediaPost);

//   .classList.add("post__content");
console.log(newSocialMediaPost);
// console.log("footer", newSocialMediaPostFooter);
// console.log("username", newSocialMediaPostUsername);
console.log(newSocialMediaPostButton);
