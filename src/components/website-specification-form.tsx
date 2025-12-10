"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { WebsiteSpecificationFormValues, websiteSpecificationSchema } from "@/lib/schemas";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const projectTypes = [
  { id: "showcase", label: "Site Vitrine" },
  { id: "portfolio", label: "Portfolio" },
  { id: "online-cv", label: "CV en ligne" },
] as const;

const contentElements = [
  { id: "text", label: "Textes descriptifs" },
  { id: "images", label: "Galerie d'images" },
  { id: "videos", label: "Vidéos" },
  { id: "services-list", label: "Liste de services" },
  { id: "contact-form", label: "Formulaire de contact" },
  { id: "portfolio-gallery", label: "Galerie de projets/portfolio" },
  { id: "testimonials", label: "Témoignages clients" },
  { id: "blog", label: "Section Blog (simple)" },
] as const;

export function WebsiteSpecificationForm() {
  const form = useForm<WebsiteSpecificationFormValues>({
    resolver: zodResolver(websiteSpecificationSchema),
    defaultValues: {
      clientName: "",
      clientEmail: "",
      clientPhone: "",
      companyName: "",
      projectType: [],
      websitePurpose: "",
      targetAudience: "",
      contentElements: [],
      designPreferences: "",
      pagesNeeded: "",
      hasDomain: false,
      domainName: "",
      needsHosting: false,
      needsAnalytics: false,
    },
  });

  async function onSubmit(data: WebsiteSpecificationFormValues) {
    // In a real application, you would send this data to a backend API.
    // For this example, we'll just log it and show a toast.
    console.log(data);
    toast.success("Vos spécifications ont été soumises avec succès ! Nous vous contacterons bientôt.");
    form.reset(); // Reset the form after successful submission
  }

  const hasDomain = form.watch("hasDomain");

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Cahier de Charges pour Site Web</CardTitle>
        <CardDescription className="text-center">
          Veuillez remplir ce formulaire pour nous aider à comprendre vos besoins pour votre futur site web.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <h3 className="text-lg font-semibold">Vos Coordonnées</h3>
            <FormField
              control={form.control}
              name="clientName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Votre Nom Complet</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="clientEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Votre Adresse E-mail</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="john.doe@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="clientPhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Votre Numéro de Téléphone (WhatsApp préféré)</FormLabel>
                  <FormControl>
                    <Input placeholder="+226 70000000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom de votre entreprise (facultatif)</FormLabel>
                  <FormControl>
                    <Input placeholder="Ma Super Entreprise" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <h3 className="text-lg font-semibold mt-8">Détails du Projet</h3>
            <FormField
              control={form.control}
              name="projectType"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel>Type de site web souhaité</FormLabel>
                    <FormDescription>
                      Sélectionnez un ou plusieurs types de projets.
                    </FormDescription>
                  </div>
                  {projectTypes.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="projectType"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item.id
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="websitePurpose"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quel est le but principal de votre site web ?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Ex: Présenter mes services, afficher mon portfolio, attirer de nouveaux clients..."
                      className="resize-y min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Soyez aussi précis que possible.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="targetAudience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Qui est votre public cible ? (facultatif)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Ex: Petites entreprises, artistes, clients locaux, recruteurs..."
                      className="resize-y min-h-[80px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <h3 className="text-lg font-semibold mt-8">Contenu et Design</h3>
            <FormField
              control={form.control}
              name="contentElements"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel>Quels types de contenu souhaitez-vous inclure ?</FormLabel>
                    <FormDescription>
                      Sélectionnez tous les éléments pertinents.
                    </FormDescription>
                  </div>
                  {contentElements.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="contentElements"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item.id
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="pagesNeeded"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quelles pages spécifiques souhaitez-vous ? (facultatif)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Ex: Accueil, À Propos, Services, Portfolio, Contact, Blog..."
                      className="resize-y min-h-[80px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Listez les pages principales que vous imaginez pour votre site.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="designPreferences"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Préférences de design (couleurs, style, exemples de sites que vous aimez) (facultatif)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Ex: Couleurs vives, style minimaliste, j'aime le site example.com pour son design..."
                      className="resize-y min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <h3 className="text-lg font-semibold mt-8">Options Techniques</h3>
            <FormField
              control={form.control}
              name="hasDomain"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      J'ai déjà un nom de domaine
                    </FormLabel>
                    <FormDescription>
                      Cochez si vous possédez déjà un nom de domaine pour votre site.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            {hasDomain && (
              <FormField
                control={form.control}
                name="domainName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Votre nom de domaine existant</FormLabel>
                    <FormControl>
                      <Input placeholder="mon-site.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {!hasDomain && (
              <FormField
                control={form.control}
                name="domainName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom de domaine souhaité (facultatif)</FormLabel>
                    <FormControl>
                      <Input placeholder="mon-nouveau-site.bf" {...field} />
                    </FormControl>
                    <FormDescription>
                      Nous offrons 1 an d'hébergement gratuit pour les sites avec noms de domaines en .BF.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="needsHosting"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Je souhaite bénéficier de l'hébergement gratuit (1 an)
                    </FormLabel>
                    <FormDescription>
                      Offert pour les sites avec noms de domaines en .BF.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="needsAnalytics"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Je souhaite un tableau analytique pour la surveillance du site
                    </FormLabel>
                    <FormDescription>
                      Surveillance du nombre de visiteurs, des performances et de la sécurité.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">Soumettre le Cahier de Charges</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}