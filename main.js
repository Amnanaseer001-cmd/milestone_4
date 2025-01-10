// document
//   .getElementById("resumeForm")
//   ?.addEventListener("submit", function (event) {
//     event.preventDefault();
var _a;
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
(_a = document
    .getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var profilePictureInput = document.getElementById("profilePicture");
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var addressElement = document.getElementById("linkdin");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    if (profilePictureInput &&
        nameElement &&
        emailElement &&
        phoneElement &&
        addressElement &&
        educationElement &&
        experienceElement &&
        skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        "";
        var phone = phoneElement.value;
        var linkdin = addressElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile
            ? URL.createObjectURL(profilePictureFile)
            : "";
        var resumeOutput = "\n        <div class=\"resume\">\n          ".concat(profilePictureURL
            ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">")
            : "", "\n          <p id=\"nameDisplay\" class=\"editable\"><strong>Name:</strong> ").concat(name_1, "</p>\n          <p id=\"emailDisplay\" class=\"editable\"><strong>Email:</strong> ").concat(email, "</p>\n          <p id=\"phoneDisplay\" class=\"editable\"><strong>Phone Number:</strong> ").concat(phone, "</p>\n          <p id=\"addressDisplay\" class=\"editable\"><strong>LinkedIn:</strong> ").concat(linkdin, "</p>\n          <h3>Education</h3>\n          <p id=\"educationDisplay\" class=\"editable\">").concat(education, "</p>\n          <h3>Work Experience</h3>\n          <p id=\"experienceDisplay\" class=\"editable\">").concat(experience, "</p>\n          <h3>Skills</h3>\n          <p id=\"skillsDisplay\" class=\"editable\">").concat(skills, "</p>\n        </div>\n      ");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            // Add event listeners to make sections editable
            var editableSections = document.querySelectorAll(".editable");
            editableSections.forEach(function (section) {
                section.addEventListener("click", function () {
                    makeSectionEditable(section);
                });
            });
        }
        else {
            console.error("The resume output element is missing");
        }
    }
    else {
        console.error("One or more form elements are missing");
    }
});
// Function to make a section editable
function makeSectionEditable(section) {
    var originalContent = section.innerHTML;
    var input = document.createElement("textarea");
    input.value = section.textContent || "";
    input.style.width = "100%";
    input.style.fontSize = "1rem";
    section.innerHTML = "";
    section.appendChild(input);
    input.addEventListener("blur", function () {
        var newValue = input.value;
        section.innerHTML = "<strong>".concat(section.id.replace("Display", ""), ":</strong> ").concat(newValue);
        section.style.backgroundColor = "#ffefc1"; // Highlight the change
        setTimeout(function () { return (section.style.backgroundColor = ""); }, 2000); // Remove highlight after 2 seconds
    });
    input.focus();
}