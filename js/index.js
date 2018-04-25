(function initialize() {
  const contentPickerAboutMe = document.querySelector('.content_picker__about_me');
  const contentPickerProjects = document.querySelector('.content_picker__projects');
  const contentPickerContact = document.querySelector('.content_picker__contact');
  const projectsSection = document.querySelector('.projects');
  const aboutMeSection = document.querySelector('.about_me');
  const contactSection = document.querySelector('.contact');
  const projects = document.querySelectorAll('.project');

  function preventChildrenOfHiddenElementFromFocusing(parentCssQuerySelector) {
    const hiddenChildren = [...document.querySelector(parentCssQuerySelector)
      .getElementsByTagName('*')];
    for (const child of hiddenChildren) {
      child.setAttribute('tabindex', '-1');
    }
  }

  function allowChildrenOfPreviouslyHiddenElementToFocus(parentCssQuerySelector) {
    const hiddenChildren = document.querySelector(parentCssQuerySelector)
      .getElementsByTagName('*');
    for (const child of hiddenChildren) {
      child.removeAttribute('tabindex');
    }
  }

  function rotateArrows(clickedElement) {
    const arrows = document.querySelectorAll('.content_picker__arrow');
    for (const arrow of arrows) {
      if (clickedElement.contains(arrow)) {
        arrow.classList.toggle('content_picker__arrow--up');
      } else arrow.classList.remove('content_picker__arrow--up');
    }
  }

  preventChildrenOfHiddenElementFromFocusing('.projects');
  preventChildrenOfHiddenElementFromFocusing('.about_me');
  preventChildrenOfHiddenElementFromFocusing('.contact');

  contentPickerProjects.addEventListener('click', () => {
    aboutMeSection.classList.add('about_me--hidden');
    aboutMeSection.classList.remove('about_me--visible');
    contactSection.classList.add('contact--hidden');
    contactSection.classList.remove('contact--visible');
    projectsSection.classList.toggle('projects--hidden');
    projectsSection.classList.toggle('projects--visible');
    rotateArrows(contentPickerProjects);
    contentPickerProjects.classList.remove('content_picker__projects--hover');
    if (projectsSection.classList.contains('projects--hidden')) {
      preventChildrenOfHiddenElementFromFocusing('.projects');
    } else {
      allowChildrenOfPreviouslyHiddenElementToFocus('.projects');
      preventChildrenOfHiddenElementFromFocusing('.about_me');
      preventChildrenOfHiddenElementFromFocusing('.contact');
    }
  });

  contentPickerAboutMe.addEventListener('click', () => {
    projectsSection.classList.add('projects--hidden');
    projectsSection.classList.remove('projects--visible');
    contactSection.classList.add('contact--hidden');
    contactSection.classList.remove('contact--visible');
    aboutMeSection.classList.toggle('about_me--hidden');
    aboutMeSection.classList.toggle('about_me--visible');
    rotateArrows(contentPickerAboutMe);
    contentPickerAboutMe.classList.remove('content_picker__about_me--hover');
    if (aboutMeSection.classList.contains('about_me--hidden')) {
      preventChildrenOfHiddenElementFromFocusing('.about_me');
    } else {
      allowChildrenOfPreviouslyHiddenElementToFocus('.about_me');
      preventChildrenOfHiddenElementFromFocusing('.projects');
      preventChildrenOfHiddenElementFromFocusing('.contact');
    }
  });

  contentPickerContact.addEventListener('click', () => {
    projectsSection.classList.add('projects--hidden');
    projectsSection.classList.remove('projects--visible');
    aboutMeSection.classList.add('about_me--hidden');
    aboutMeSection.classList.remove('about_me--visible');
    contactSection.classList.toggle('contact--hidden');
    contactSection.classList.toggle('contact--visible');
    rotateArrows(contentPickerContact);
    contentPickerContact.classList.remove('content_picker__contact--hover');
    if (contactSection.classList.contains('contact--hidden')) {
      preventChildrenOfHiddenElementFromFocusing('.contact');
    } else {
      allowChildrenOfPreviouslyHiddenElementToFocus('.contact');
      preventChildrenOfHiddenElementFromFocusing('.projects');
      preventChildrenOfHiddenElementFromFocusing('.about_me');
    }
  });

  // Preventing content picker buttons from getting focus on click.

  contentPickerProjects.addEventListener('mousedown', (event) => {
    event.preventDefault();
  });

  contentPickerAboutMe.addEventListener('mousedown', (event) => {
    event.preventDefault();
  });

  contentPickerContact.addEventListener('mousedown', (event) => {
    event.preventDefault();
  });

  // Hover animations working on mouse only

  contentPickerProjects.addEventListener('mouseover', () => {
    contentPickerProjects.classList.add('content_picker__projects--hover');
  });
  contentPickerAboutMe.addEventListener('mouseover', () => {
    contentPickerAboutMe.classList.add('content_picker__about_me--hover');
  });
  contentPickerContact.addEventListener('mouseover', () => {
    contentPickerContact.classList.add('content_picker__contact--hover');
  });

  contentPickerProjects.addEventListener('mouseout', () => {
    contentPickerProjects.classList.remove('content_picker__projects--hover');
  });
  contentPickerAboutMe.addEventListener('mouseout', () => {
    contentPickerAboutMe.classList.remove('content_picker__about_me--hover');
  });
  contentPickerContact.addEventListener('mouseout', () => {
    contentPickerContact.classList.remove('content_picker__contact--hover');
  });

  for (const project of projects) {
    project.addEventListener('mouseover', () => {
      project.classList.add('project--hover');
    });
    project.addEventListener('mouseout', () => {
      project.classList.remove('project--hover');
    });
    project.addEventListener('click', () => {
      project.classList.remove('project--hover');
    });
  }
}());
