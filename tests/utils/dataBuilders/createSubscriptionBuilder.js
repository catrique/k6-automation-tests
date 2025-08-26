import { generateRandomName } from "../generate_names.js";
import { generateRandomEmail } from "../generate_emails.js";

class CreateSubscriptionBuilder {
  constructor() {
    this.data = {
      paymentTypeId: null,
      installments: 1,
      payerName: generateRandomName(),
      payerDocument: "09950868009",
      payerEmail: generateRandomEmail(),
      payerCellphone: "00000000000",
      payerNumber: "123",
      payerPostalCode: "00000000",
      payerCountry: "Brazil",
      eventCode: null, 
      referrerPackageCode: null,
      registrations: [], 
      cardBrand: null,
      cardExpirationDate: null,
      cardName: null,
      cardNumber: null,
      cardSecurityCode: null,
    };

    this.lastAddedRegistration = null;
  }

  /**
   * Inicia a construção de um único registro principal.
   * Este método define o eventCode e cria o primeiro (e possivelmente único) registro.
   * @param {Object} config - Configurações para o registro básico.
   * @param {string} config.eventCode - O código do evento.
   * @param {string} config.subscriptionTypeId - O ID do tipo de inscrição.
   * @param {boolean} [config.requiresEmail=false] - Se true, gera um email aleatório.
   * @param {boolean} [config.requiresWhatsApp=false] - Se true, gera um número de WhatsApp aleatório.
   */
  basic({ eventCode, subscriptionTypeId, requiresEmail = false, requiresWhatsApp = false }) {
    this.data.eventCode = eventCode;

    const registration = {
      name: generateRandomName(), 
      email: requiresEmail ? generateRandomEmail() : null, 
      whatsApp: requiresWhatsApp ? "+5500000000000" : null, 
      subscriptionTypeId: subscriptionTypeId,
      fieldResponses: [], 
      selectedVariants: [],
      customDonationValue: 0,
    };

    this.data.registrations = [registration]; 
    this.lastAddedRegistration = registration; 

    return this;
  }

  /**
   * Adiciona variantes selecionadas ao ÚLTIMO registro adicionado (geralmente o criado por .basic()).
   * @param {Array<{id: string, quantity: number}>} variants
   */
  products(variants = []) {
    if (!this.lastAddedRegistration) {
      console.warn("Chame .basic() primeiro para inicializar um registro antes de adicionar produtos.");
      return this;
    }
    this.lastAddedRegistration.selectedVariants = variants;
    return this;
  }

  /**
   * Adiciona respostas de campos (fieldResponses) ao ÚLTIMO registro adicionado.
   * Espera um array no formato { eventFieldId: "...", value: "...", values: null }.
   * Se precisar mapear de um objeto simples, use _mapCustomFieldResponses internamente ou withCustomFieldResponsesAtIndex.
   * @param {Array<Object>} responsesArray - Array de objetos fieldResponse.
   */
  fieldResponses(responsesArray = []) {
    if (!this.lastAddedRegistration) {
      console.warn("Chame .basic() primeiro para inicializar um registro antes de adicionar respostas de campo.");
      return this;
    }
    this.lastAddedRegistration.fieldResponses = responsesArray;
    return this;
  }

  free() {
    this.data.paymentTypeId = 0;
    return this;
  }

  pix() {
    this.data.paymentTypeId = 16; 
    return this;
  }
  creditCard(cardDetails = {}) {
    this.data.paymentTypeId = 4;
    this.data.installments = cardDetails.installments || 1;
    this.data.cardBrand = cardDetails.cardBrand || 2;
    this.data.cardExpirationDate = cardDetails.cardExpirationDate || "01/2029";
    this.data.cardName = cardDetails.cardName || generateRandomName();
    this.data.cardNumber = cardDetails.cardNumber || "4977368329517660";
    this.data.cardSecurityCode = cardDetails.cardSecurityCode || "259";
    return this;
  }
  withOverrides(overrides = {}) {
    this.data = { ...this.data, ...overrides };
    return this;
  }

  build() {
    return this.data;
  }
}

export const createSubscription = new CreateSubscriptionBuilder();