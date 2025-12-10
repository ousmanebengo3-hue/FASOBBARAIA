import { z } from "zod";

export const websiteSpecificationSchema = z.object({
  clientName: z.string().min(1, "Le nom du client est requis."),
  clientEmail: z.string().email("Adresse e-mail invalide."),
  clientPhone: z.string().min(1, "Le numéro de téléphone est requis (WhatsApp préféré)."),
  companyName: z.string().optional(),
  projectType: z.array(z.string()).min(1, "Veuillez sélectionner au moins un type de projet."),
  websitePurpose: z.string().min(10, "Veuillez décrire le but de votre site web (au moins 10 caractères)."),
  targetAudience: z.string().optional(),
  contentElements: z.array(z.string()).min(1, "Veuillez sélectionner au moins un élément de contenu."),
  designPreferences: z.string().optional(),
  pagesNeeded: z.string().optional(),
  hasDomain: z.boolean().default(false),
  domainName: z.string().optional(),
  needsHosting: z.boolean().default(false),
  needsAnalytics: z.boolean().default(false),
}).superRefine((data, ctx) => {
  // Validation croisée: Si hasDomain est vrai, domainName doit être spécifié.
  if (data.hasDomain && !data.domainName) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['domainName'],
      message: "Veuillez spécifier votre nom de domaine existant.",
    });
  }
});

export type WebsiteSpecificationFormValues = z.infer<typeof websiteSpecificationSchema>;