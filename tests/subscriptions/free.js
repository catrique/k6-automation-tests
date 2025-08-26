import { sleep } from "k6";
import { command } from "../utils/requestHelper.js";
import { createSubscription } from "../utils/dataBuilders/createSubscriptionBuilder.js";
import {generateNumbers} from "../utils/random_installment.js"

export const options = {
  vus: 10,
  duration: "30s",
};

export default function () {
  const data = createSubscription
    .basic({
      eventCode: "code",
      requiresEmail: true,
      requiresWhatsApp: true,
      subscriptionTypeId: "id",
    })
    .products([
        {
          id: "id",
          quantity: generateNumbers(10),
        },
    ])
    .free()
    .build();

  command("eventsConsumers/multipleConsumer/forRegister", data, "registration");
  sleep(1);
}
