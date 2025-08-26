import { sleep } from "k6";
import { command } from "../utils/requestHelper.js";
import { createSubscription } from "../utils/dataBuilders/createSubscriptionBuilder.js";
import { generateNumbers } from "../utils/random_installment.js";
import { randomIntBetween } from "https://jslib.k6.io/k6-utils/1.1.0/index.js";

export const options = {
  vus: 1,
  duration: "600s",
  iterations: 1,
};

export default function () {
  const selectedFieldResponse = getRandomFieldResponse();
  const productData = getMultipleUniqueRandomProductsArray();
  const selectedsubscriptionTypeId = getRandomsubscriptionTypeId();

  const data = createSubscription
    .basic({
      eventCode: "code",
      requiresEmail: false,
      requiresWhatsApp: true,
      subscriptionTypeId: selectedsubscriptionTypeId,
    })
    .products(productData)
    .fieldResponses([selectedFieldResponse])
    .creditCard(10)
    .build();

  command("eventsConsumers/multipleConsumer/forRegister", data, "registration");
  sleep(2);
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

const subscriptionTypeId = ["ZgscJ6Ik", "YuNNXOhP",'I6sqpe5c'];
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
  }
];

const productsVariants = [
  {
    "id": "qaD9wTXT"
  },
  {
    "id": "9qovg0az"
  },
  {
    "id": "wwmVepDv"
  },
  {
    "id": "JV05LyoB"
  }
]
