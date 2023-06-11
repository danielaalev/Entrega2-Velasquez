class WeddingServices {
    constructor(name, options, price) {
        this.name = name;
        this.options = options;
        this.price = price;
    }
}

const services = [];
services.push(new WeddingServices('Venue Service', ['Option 1: Secret luxury location outside the city', 'Option 2: 5-star hotel within the city'], [7500, 4500]));

services.push(new WeddingServices('Catering Service', ['Option 1: Premium selection', 'Option 2: Standard selection'], [20000, 15000]));

services.push(new WeddingServices('Decoration Service', ['Option 1: Exclusive High-End Decor', 'Option 2: Traditional Decor'], [10000, 8000]));

services.push(new WeddingServices('Photography & Videography', ['Option 1: Artistic Masterpieces', 'Option 2: Classic captures'], [5000, 4000]));

services.push(new WeddingServices('Wedding Attire', ['Option 1: Couture Elegance', 'Option 2: Sophisticated Charm'], [10000, 7000]));

services.push(new WeddingServices('Entertainment Service', ['Option 1: Luxury Entertainment Showcase', 'Option 2: Classic Performances'], [15000, 10000]));

services.push(new WeddingServices('Invitations & Stationery Service', ['Option 1: Opulent Designs', 'Option 2: Traditional Invitations and Stationery'], [3000, 2000]));

services.push(new WeddingServices('Accommodation Service', ['Option 1: 5-star hotel', 'Option 2: 4-star hotel'], [15000, 11000]));

services.push(new WeddingServices('Wedding Cake Service', ['Option 1: Sylvia Weinstock Cakes', 'Option 2: Local baker cake'], [5000, 2000]));

services.push(new WeddingServices('Hair & Makeup Service', ['Option 1: Makeup by Patrick Ta and Hair by Guido Palau', 'Option 2: Makeup and Hair by local make-up artist and hairstylist'], [7500, 2000]));


for (const service of services) {
    console.log(service.name);
    for (let i = 0; i < service.options.length; i++) {
        console.log(service.options[i]);
        console.log(service.price[i]);
    }
}

alert('Welcome to Love & Love events.\nWe plan the wedding of your dreams.');

//Function to filter by price

function filterByPrice(budget) {
    const filteredServices = services.filter((service) => service.price.some((servicePrice) => servicePrice <= budget));
    return filteredServices;
}

//Function to find by service name 

function findByName(serviceName) {
    const foundService = services.find((service) => service.name.toLowerCase() == serviceName.toLowerCase());
    return foundService;
}

let userChoice;

while (userChoice !== 'exit') {
  userChoice = prompt('Press 1 to look for by service name or press 2 to filter services by price, or type "exit" to quit:');

  switch (userChoice) {
    case '1':
        const lookForByName = prompt('What is the name of the service you are looking for?');
        const foundService = findByName(lookForByName);
        if (foundService) {
          console.log(foundService);
        } else {
          console.log('Service not found');
        }
        break;
    case '2':
        let budget = parseFloat(prompt('What is your budget for the wedding?'));
        while (budget !== 0) {
          if (isNaN(budget) || budget < 0) {
            alert('Enter a valid budget amount');
          } else {
            const filteredServices = filterByPrice(budget);
            console.table(filteredServices);
          }
          budget = parseFloat(prompt('What is your budget for the wedding?'));
        }
        break;
    case 'exit':
      alert('Thank you for visiting us!');
      break;
    default:
      alert('Invalid choice');
  }
}

