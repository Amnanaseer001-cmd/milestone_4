// document
//   .getElementById("resumeForm")
//   ?.addEventListener("submit", function (event) {
//     event.preventDefault();

//     const profilePictureInput = document.getElementById("profilePicture");
//     const nameElement = document.getElementById("name");
//     const emailElement = document.getElementById("email");
//     const phoneElement = document.getElementById("phone");
//     const addressElement = document.getElementById("linkdin");
//     const educationElement = document.getElementById("education");
//     const experienceElement = document.getElementById("experience");
//     const skillsElement = document.getElementById("skills");
//     if (
//       profilePictureInput &&
//       nameElement &&
//       emailElement &&
//       phoneElement &&
//       addressElement &&
//       educationElement &&
//       experienceElement &&
//       skillsElement
//     ) {
//       const name = (nameElement as HTMLInputElement).value;
//       const email = (emailElement as HTMLInputElement).value;
//       const phone = (phoneElement as HTMLInputElement).value;
//       const address = (addressElement as HTMLInputElement).value;
//       const education = (educationElement as HTMLInputElement).value;
//       const experience = (experienceElement as HTMLInputElement).value;
//       const skills = (skillsElement as HTMLInputElement).value;

//       const profilePictureFile = (profilePictureInput as HTMLInputElement)
//         .files?.[0];
//       const profilePictureURL = profilePictureFile
//         ? URL.createObjectURL(profilePictureFile)
//         : "";

//       const resumeOutput = `
//         <div class="resume">

//         ${
//           profilePictureURL
//             ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">`
//             : ""
//         }
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone Number:</strong> ${phone}</p>
//         <p><strong>Linkdin:</strong> ${address}</p>
//         <h3>Education</h3>
//         <p>${education}</p>
//         <h3>Work Experience</h3>
//         <p>${experience}</p>
//         <h3>Skills</h3>
//         <p>${skills}</p>
//         </div>
//         `;
//       const resumeOutputElement = document.getElementById("resumeOutput");
//       if (resumeOutputElement) {
//         resumeOutputElement.innerHTML = resumeOutput;
//       } else {
//         console.error("The resume output element is missing");
//       }
//     } else {
//       console.error("One or more form elements are missing");
//     }
//   });
document
  .getElementById("resumeForm")
  ?.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    const profilePictureInput = document.getElementById(
      "profilePicture"
    ) as HTMLInputElement;
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const addressElement = document.getElementById(
      "linkdin"
    ) as HTMLInputElement;
    const educationElement = document.getElementById(
      "education"
    ) as HTMLInputElement;
    const experienceElement = document.getElementById(
      "experience"
    ) as HTMLInputElement;
    const skillsElement = document.getElementById("skills") as HTMLInputElement;

    if (
      profilePictureInput &&
      nameElement &&
      emailElement &&
      phoneElement &&
      addressElement &&
      educationElement &&
      experienceElement &&
      skillsElement
    ) {
      const name = nameElement.value;
      const email = emailElement.value;
      ``;
      const phone = phoneElement.value;
      const linkdin = addressElement.value;
      const education = educationElement.value;
      const experience = experienceElement.value;
      const skills = skillsElement.value;

      const profilePictureFile = profilePictureInput.files?.[0];
      const profilePictureURL = profilePictureFile
        ? URL.createObjectURL(profilePictureFile)
        : "";

      const resumeOutput = `
        <div class="resume">
          ${
            profilePictureURL
              ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">`
              : ""
          }
          <p id="nameDisplay" class="editable"><strong>Name:</strong> ${name}</p>
          <p id="emailDisplay" class="editable"><strong>Email:</strong> ${email}</p>
          <p id="phoneDisplay" class="editable"><strong>Phone Number:</strong> ${phone}</p>
          <p id="addressDisplay" class="editable"><strong>LinkedIn:</strong> ${linkdin}</p>
          <h3>Education</h3>
          <p id="educationDisplay" class="editable">${education}</p>
          <h3>Work Experience</h3>
          <p id="experienceDisplay" class="editable">${experience}</p>
          <h3>Skills</h3>
          <p id="skillsDisplay" class="editable">${skills}</p>
        </div>
      `;

      const resumeOutputElement = document.getElementById("resumeOutput");
      if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;

        // Add event listeners to make sections editable
        const editableSections =
          document.querySelectorAll<HTMLParagraphElement>(".editable");
        editableSections.forEach((section) => {
          section.addEventListener("click", () => {
            makeSectionEditable(section);
          });
        });
      } else {
        console.error("The resume output element is missing");
      }
    } else {
      console.error("One or more form elements are missing");
    }
  });

// Function to make a section editable
function makeSectionEditable(section: HTMLParagraphElement): void {
  const originalContent = section.innerHTML;
  const input = document.createElement("textarea");
  input.value = section.textContent || "";
  input.style.width = "100%";
  input.style.fontSize = "1rem";
  section.innerHTML = "";
  section.appendChild(input);

  input.addEventListener("blur", () => {
    const newValue = input.value;
    section.innerHTML = `<strong>${section.id.replace(
      "Display",
      ""
    )}:</strong> ${newValue}`;
    section.style.backgroundColor = "#ffefc1"; // Highlight the change
    setTimeout(() => (section.style.backgroundColor = ""), 2000); // Remove highlight after 2 seconds
  });

  input.focus();
}
