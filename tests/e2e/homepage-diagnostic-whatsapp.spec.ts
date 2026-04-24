import { expect, test } from "@playwright/test"

test("homepage diagnostic section shows cards without form or WhatsApp action", async ({
  page,
}) => {
  await page.goto("/")

  const diagnosticSection = page.locator("#diagnostico")

  await expect(diagnosticSection).toBeVisible()
  await expect(diagnosticSection.locator("form")).toHaveCount(0)
  await expect(diagnosticSection.getByLabel(/nome completo/i)).toHaveCount(0)
  await expect(diagnosticSection.getByLabel(/telefone ou whatsapp/i)).toHaveCount(0)
  await expect(diagnosticSection.getByLabel(/e-mail/i)).toHaveCount(0)
  await expect(diagnosticSection.getByLabel(/equipamento/i)).toHaveCount(0)
  await expect(
    diagnosticSection.getByRole("link", { name: /falar no whatsapp/i }),
  ).toHaveCount(0)
  await expect(
    diagnosticSection.getByRole("heading", {
      level: 2,
      name: /Avaliação sem ruído/i,
    }),
  ).toBeVisible()
  await expect(
    diagnosticSection.getByText(/Avaliação objetiva antes de qualquer avanço\./i),
  ).toBeVisible()
  await expect(diagnosticSection.getByText(/Diagnóstico sem ruído/i)).toHaveCount(0)
  await expect(
    diagnosticSection.getByText(/Avaliação técnica objetiva antes de qualquer avanço/i),
  ).toHaveCount(0)
  await expect(
    diagnosticSection.getByRole("heading", {
      level: 2,
      name: /Prazo alinhado/i,
    }),
  ).toBeVisible()
  await expect(
    diagnosticSection.getByRole("heading", {
      level: 2,
      name: /Atendimento em Icaraí/i,
    }),
  ).toBeVisible()
})
