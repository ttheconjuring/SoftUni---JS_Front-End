window.addEventListener("load", solve);

function solve() {
  const publishButton = document.getElementById("publish-btn");
  const reviewList = document.getElementById("review-list");
  const taskTitleInput = document.getElementById("task-title");
  const taskCategoryInput = document.getElementById("task-category");
  const taskContentInput = document.getElementById("task-content");
  const publishedList = document.getElementById("published-list");

  publishButton.addEventListener("click", () => {
    const taskTitle = taskTitleInput.value;
    const taskCategory = taskCategoryInput.value;
    const taskContent = taskContentInput.value;
    if (taskTitle !== "" && taskCategory !== "" && taskContent !== "") {
      const li = document.createElement("li");
      li.classList.add("rpost");

      const article = document.createElement("article");

      const h4Title = document.createElement("h4");
      h4Title.textContent = taskTitle;

      const pCategory = document.createElement("p");
      pCategory.textContent = `Category: ${taskCategory}`;

      const pContent = document.createElement("p");
      pContent.textContent = `Content: ${taskContent}`;

      article.appendChild(h4Title);
      article.appendChild(pCategory);
      article.appendChild(pContent);

      const buttonEdit = document.createElement("button");
      buttonEdit.classList.add("action-btn");
      buttonEdit.classList.add("edit");
      buttonEdit.textContent = "Edit";
      buttonEdit.addEventListener("click", () => {
        taskTitleInput.value = taskTitle;
        taskCategoryInput.value = taskCategory;
        taskContentInput.value = taskContent;
        reviewList.removeChild(li);
      });

      const buttonPost = document.createElement("button");
      buttonPost.classList.add("action-btn");
      buttonPost.classList.add("post");
      buttonPost.textContent = "Post";
      buttonPost.addEventListener("click", () => {
        reviewList.removeChild(li);
        li.removeChild(buttonEdit);
        li.removeChild(buttonPost);
        publishedList.appendChild(li);
      });

      li.appendChild(article);
      li.appendChild(buttonEdit);
      li.appendChild(buttonPost);

      reviewList.appendChild(li);

      taskTitleInput.value = "";
      taskCategoryInput.value = "";
      taskContentInput.value = "";
    }
  });
}
