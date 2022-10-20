const closeButton = document.querySelector('#close-mobile-menu');
const mobileMenuDisplay = document.querySelector('#mobile-menu-display');
const mobileMenuButton = document.querySelector('.mobile-menu-button');

mobileMenuButton.addEventListener('click', () => {
  mobileMenuDisplay.classList.toggle('display-none');
});

closeButton.addEventListener('click', () => {
  mobileMenuDisplay.classList.toggle('display-none');
});

const speakers = [
  {
    name: 'Merritt Baer',
    photo: 'Images/speakers/speaker1.png',
    info: 'Amazon Web Services, Principal, AWS OCISO',
    description: 'Merritt (Twitter: @MerrittBaer) is a Principal in the Office of the CISO at Amazon Web Services.',
  },
  {
    name: 'Matt Biilmann',
    photo: 'Images/speakers/speaker2.png',
    info: 'Netlify, Co-Founder and CEO',
    description: 'Mathias (Matt) Biilmann is CEO of Netlify, a company he co-founded in 2014 and today is one of the fastest-growing web development platforms.',
  },
  {
    name: 'Chip Childers',
    photo: 'Images/speakers/speaker3.png',
    info: 'Puppet, Chief Architect',
    description: 'Chip Childers is chief architect at Puppet, the industry standard for infrastructure automation. Childers brings more than 20 years of technology expertise in large-scale computing and open source software.',
  },
  {
    name: 'Bill Pearson',
    photo: 'Images/speakers/speaker4.png',
    info: 'Intel, VP of the Internet of Things Group & General Manager of Developer Enabling',
    description: 'William (Bill) J. Pearson is Vice President of the Internet of Things Group and General Manager of Developer Enabling at Intel Corporation. Pearson is responsible for enabling developers, applications and ecosystem scale on Intel’s Internet of Things products.',
  },
  {
    name: 'Sanjeev Mervana',
    photo: 'Images/speakers/speaker5.png',
    info: 'Cisco Systems, Vice President Products, Emerging Technologies & Incubation',
    description: 'As Vice President, Product Management, Emerging Technologies & Incubation (ET&I), Sanjeev leads the team in sourcing, generating, screening, and managing new innovation and incubation ideas that ultimately fuel growth for Cisco.',
  },
  {
    name: 'Gerta Sheganaku',
    photo: 'Images/speakers/speaker6.png',
    info: 'LocalStack, Co-Founder and COO',
    description: 'Gerta is co-founder and COO of LocalStack, where she and her team are obsessed with building tools for extraordinary Developer Experience (DevEx). LocalStack is the leading platform for local cloud development, based on the hugely popular open source framework with 37k+ stars on Github.',
  },
];

const speakerContainer = document.querySelector('.speaker-list');

speakers.forEach((speaker) => {
  const div = document.createElement('div');

  div.classList.add('speaker');
  let addElements = '';
  addElements += `
  <div class="speaker flex">
          <div class="speaker-image">
            <img src="${speaker.photo}" alt="Photo of Merritt Baer">
          </div>
          <div class="flex column">
            <div class="speaker-name">
              <p>${speaker.name}</p>
            </div>
            <div class="organize">
              <p>${speaker.info}</p>
            </div>
            <div class="speaker-description">
              <p>${speaker.description} </p>
            </div>
          </div>
        </div>
  `;

  div.innerHTML = addElements;
  speakerContainer.appendChild(div);
});