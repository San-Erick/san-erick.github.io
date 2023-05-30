// Function to generate the characters' sections
function generateCharacterSections(characters) {
  const characterContainer = document.getElementById('characters');

  characters.forEach(character => {
    const characterSection = document.createElement('div');
    characterSection.classList.add('character');

    const characterImage = document.createElement('img');
    characterImage.src = character.image;
    characterSection.appendChild(characterImage);

    const characterName = document.createElement('h2');
    characterName.textContent = character.name;
    characterSection.appendChild(characterName);

    // Add a button to hide the character section
    const hideButton = document.createElement('button');
    hideButton.textContent = 'Hide';
    hideButton.addEventListener('click', () => {
      characterSection.style.display = 'none';
    });
    characterSection.appendChild(hideButton);

    characterContainer.appendChild(characterSection);
  });
}

// Function to generate the comments section
function generateCommentsSection(comments) {
  const commentsSection = document.getElementById('comments-list');

  const commentsContent = document.createElement('div');
  commentsContent.innerHTML = '<h2>Comments</h2>';

  comments.forEach(comment => {
    const commentItem = document.createElement('div');
    commentItem.classList.add('comment');

    const commentUser = document.createElement('h3');
    commentUser.textContent = comment.user;
    commentItem.appendChild(commentUser);

    const commentText = document.createElement('p');
    commentText.textContent = comment.comment;
    commentItem.appendChild(commentText);

    // Add a button to hide the comment section
    const hideButton = document.createElement('button');
    hideButton.textContent = 'Hide';
    hideButton.addEventListener('click', () => {
      commentItem.style.display = 'none';
    });
    commentItem.appendChild(hideButton);

    commentsContent.appendChild(commentItem);
  });

  commentsSection.appendChild(commentsContent);
}


// Function to generate the resume section
function generateresumeSection(resume) {
  const resumeSection = document.getElementById('resume');

  const resumeContent = document.createElement('div');
  resumeContent.innerHTML = `
    <h4>resume</h4>
    <p>${resume}</p>
  `;

  resumeSection.appendChild(resumeContent);
  
  // Add a button to hide the resume section
  
}

// Fetch the JSON data
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const characters = data.characters;
    const comments = data.comments;
    const resume = data.resume;

    generateCharacterSections(characters);
    generateCommentsSection(comments);
    generateResumeSection(resume);
  })
  .catch(error => {
    console.log('An error occurred while fetching the JSON data:', error);
  });