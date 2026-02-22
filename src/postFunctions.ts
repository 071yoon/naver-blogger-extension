export const likeAllLikablePosts = () => {
  (function () {
    let queryOptions = { active: true, lastFocusedWindow: true };
    chrome.tabs.query(queryOptions, ([tab]) => {
      if (chrome.runtime.lastError) console.error(chrome.runtime.lastError);

      // @ts-ignore
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
          const posts = document.getElementsByClassName("info_post");

          for (let i = 0; i < posts.length; i++) {
            const post = posts[i];

            const likeButton = post.querySelector(
              ".u_likeit_button",
            ) as HTMLAnchorElement;
            if (likeButton?.getAttribute("aria-pressed") === "false") {
              likeButton.dispatchEvent(
                new MouseEvent("mousedown", {
                  bubbles: true,
                }),
              );

              setTimeout(() => {
                likeButton.dispatchEvent(
                  new MouseEvent("mouseup", {
                    bubbles: true,
                  }),
                );
              }, 100);
            }
          }
        },
        args: [],
      });
    });
  })();
};

export const deleteAllPostsInTab = () => {
  (function () {
    let queryOptions = { active: true, lastFocusedWindow: true };
    chrome.tabs.query(queryOptions, ([tab]) => {
      if (chrome.runtime.lastError) console.error(chrome.runtime.lastError);

      // @ts-ignore
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
          const posts = document.getElementsByClassName("info_post");

          for (let i = 0; i < posts.length; i++) {
            const post = posts[i];

            const delButton = post.querySelector(
              ".button_del_post",
            ) as HTMLAnchorElement;
            if (delButton) {
              delButton.click();
            }
          }
        },
        args: [],
      });
    });
  })();
};
