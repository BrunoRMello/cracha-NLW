const links = {
  github: "BrunoRMello",
  youtube: "brunomello",
  facebook: "BrunoMello",
  instagram: "@brvolk",
  twitter: "volk_bruno",
};

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");
    li.children[0].href = `https://${social}.com/${links[social]}`;
  }
}

changeSocialMediaLinks();

function getGitHubProfile() {
  const url = `https://api.github.com/users/${links.github}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      userName.textContent = data.name;
      userBio.textContent = data.bio;
      userLink.href = data.html_url;
      userPhoto.src = data.avatar_url;
      userLogin.textContent = data.login;
    });
}
getGitHubProfile();
