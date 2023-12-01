function lockedProfile() {
  const buttons = Array.from(document.getElementsByTagName("button"));
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const parent = button.parentNode;
      const radioButtonUnlock = parent.querySelector(`[value="unlock"]`);
      const profileIsUnlocked = radioButtonUnlock.checked;
      if (profileIsUnlocked) {
        const divUserHiddenFields = parent.getElementsByTagName("div")[0];
        if (button.textContent === "Show more") {
          divUserHiddenFields.style.display = "block";
          button.textContent = "Hide it";
        } else {
          divUserHiddenFields.style.display = "none";
          button.textContent = "Show more";
        }
      }
    });
  });
}
