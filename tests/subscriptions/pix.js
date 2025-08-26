import { sleep } from "k6";
import { command } from "../utils/requestHelper.js";
import { createSubscription } from "../utils/dataBuilders/createSubscriptionBuilder.js";
import { generateNumbers } from "../utils/random_installment.js";
import { randomIntBetween } from "https://jslib.k6.io/k6-utils/1.1.0/index.js";

export const options = {
  vus: 2,
  duration: "60s",
};

export default function () {
  const selectedFieldResponse = getRandomFieldResponse();
  const productData = getMultipleUniqueRandomProductsArray();
  const selectedsubscriptionTypeId = getRandomsubscriptionTypeId();

    const data = createSubscription
    .basic({
      eventCode: "0COPQS",
      requiresEmail: true,
      requiresWhatsApp: true,
      subscriptionTypeId: selectedsubscriptionTypeId,
    })
    .products(productData)
    .fieldResponses(selectedFieldResponse)
    .pix()
    .build();

  command("eventsConsumers/multipleConsumer/forRegister", data, "registration");
  sleep(4);
}


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = randomIntBetween(0, i);
    [array[i], array[j]] = [array[j], array[i]]; 
  }
  return array;
}


function getMultipleUniqueRandomProductsArray() {
  const shuffledProducts = shuffleArray([...productsVariants]);
  const numProductsToSelect = randomIntBetween(1, productsVariants.length);
  const selectedUniqueProducts = shuffledProducts.slice(0, numProductsToSelect);
  return selectedUniqueProducts.map(product => ({
    id: product.id,
    quantity: generateNumbers(10),
  }));
}


function getRandomFieldResponse() {
  const randomIndex = randomIntBetween(0, fieldOptions.length - 1);
  return fieldOptions[randomIndex];
}

function getRandomsubscriptionTypeId() {
  const randomIndex = randomIntBetween(0, subscriptionTypeId.length - 1);
  return subscriptionTypeId[randomIndex];
}

const subscriptionTypeId = ["3AuLG4Uv", "BoUHEOdh"];

const fieldOptions = [
  {
    value: "Pomerânia",
    eventFieldId: "p7oP5IkR",
    values: null,
  },
  {
    value: "Chihuahua",
    eventFieldId: "p7oP5IkR",
    values: null,
  },
  {
    value: "Shih Tzu",
    eventFieldId: "p7oP5IkR",
    values: null,
  },
  {
    value: "Dachshund",
    eventFieldId: "p7oP5IkR",
    values: null,
  },
  {
    value: "Maltês",
    eventFieldId: "p7oP5IkR",
    values: null,
  },
  {
    value: "Yorkshire Terrier",
    eventFieldId: "p7oP5IkR",
    values: null,
  },
  {
    value: "Cocker Spaniel",
    eventFieldId: "p7oP5IkR",
    values: null,
  },
  {
    value: "Border Collie",
    eventFieldId: "p7oP5IkR",
    values: null,
  },
  {
    value: "Bulldog Francês",
    eventFieldId: "p7oP5IkR",
    values: null,
  },
  {
    value: "Beagle",
    eventFieldId: "p7oP5IkR",
    values: null,
  },
  {
    value: "Australian Shepherd",
    eventFieldId: "p7oP5IkR",
    values: null,
  },
  {
    value: "Schnauzer",
    eventFieldId: "p7oP5IkR",
    values: null,
  },
  {
    value: "Labrador Retriever",
    eventFieldId: "p7oP5IkR",
    values: null,
  },
  {
    value: "Golden Retriever",
    eventFieldId: "p7oP5IkR",
    values: null,
  },
  {
    value: "Pastor Alemão",
    eventFieldId: "p7oP5IkR",
    values: null,
  },
  {
    value: "Husky Siberiano",
    eventFieldId: "p7oP5IkR",
    values: null,
  },
  {
    value: "Boxer",
    eventFieldId: "p7oP5IkR",
    values: null,
  },
  {
    value: "Rottweiler",
    eventFieldId: "p7oP5IkR",
    values: null,
  },
  {
    value: "São Bernardo",
    eventFieldId: "p7oP5IkR",
    values: null,
  },
  {
    value: "Mastim Napolitano",
    eventFieldId: "p7oP5IkR",
    values: null,
  },
  {
    value: "Dogue Alemão",
    eventFieldId: "p7oP5IkR",
    values: null,
  },
  {
    value: "Leonberger",
    eventFieldId: "p7oP5IkR",
    values: null,
  },
  {
    value: "Terra Nova",
    eventFieldId: "p7oP5IkR",
    values: null,
  },
  {
    value: "Akita",
    eventFieldId: "p7oP5IkR",
    values: null,
  },
];

const productsVariants = [
  {
    id: "NjZeSIjf",
  },
  {
    id: "buudlz5Q",
  },
  {
    id: "Fr9RwynL",
  },
  {
    id: "1jUpcltS",
  },
  {
    id: "J5E49w68",
  },
  {
    id: "qZ54LfcC",
  },
  {
    id: "VGJ0yf1R",
  },
  {
    id: "B6xBtOfc",
  },
  {
    id: "L50tOmK2",
  },
  {
    id: "qlgs21Er",
  },
  {
    id: "umebGpr9",
  },
  {
    id: "x8dvuroT",
  },
  {
    id: "32tMfLIu",
  },
  {
    id: "1JyZB3pw",
  },
  {
    id: "RIS5596i",
  },
  {
    id: "PmCuRIO0",
  },
  {
    id: "gDNiciMa",
  },
  {
    id: "apczXhp7",
  },
  {
    id: "rlznKjAT",
  },
  {
    id: "WmJInWty",
  },
  {
    id: "eoWwGoZA",
  },
  {
    id: "1UnqJb7b",
  },
  {
    id: "IorpXQNs",
  },
  {
    id: "iMXlCN7K",
  },
  {
    id: "RYBLSyKf",
  },
  {
    id: "40AkELQP",
  },
  {
    id: "DpjAx499",
  },
  {
    id: "NbXwg3sc",
  },
  {
    id: "OxyRF3ZJ",
  },
  {
    id: "BWtnSjdx",
  },
  {
    id: "q9G8jkOm",
  },
  {
    id: "hAD90NVA",
  },
  {
    id: "aErWVzd5",
  },
  {
    id: "2rFDlKkI",
  },
  {
    id: "ztxEMXNd",
  },
  {
    id: "VEFjogc0",
  },
  {
    id: "JiAbT8qQ",
  },
  {
    id: "VA5RFb1w",
  },
  {
    id: "gUAwhhNd",
  },
  {
    id: "Qe2gTTGL",
  },
  {
    id: "wxpUZQxZ",
  },
  {
    id: "HdEw825X",
  },
  {
    id: "gijzcnAl",
  },
  {
    id: "rs0Farvh",
  },
  {
    id: "kK5LjO8e",
  },
  {
    id: "FT9GGmdC",
  },
  {
    id: "8PGVhhgi",
  },
  {
    id: "mXactbWC",
  },
  {
    id: "QumI07FQ",
  },
  {
    id: "61FSQHuf",
  },
  {
    id: "NgTtnSUf",
  },
  {
    id: "yrIjpwqD",
  },
  {
    id: "sA1OKZkS",
  },
  {
    id: "exILPNQq",
  },
  {
    id: "RieZnAPg",
  },
  {
    id: "d31FzSNP",
  },
  {
    id: "6lXBXC6N",
  },
  {
    id: "LLBHYEim",
  },
  {
    id: "ISEtRete",
  },
  {
    id: "bq3mlY53",
  },
  {
    id: "Eh4hqGwE",
  },
  {
    id: "54Qb1pPh",
  },
  {
    id: "IR8iuVTm",
  },
];
