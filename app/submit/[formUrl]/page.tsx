import { GetFormContentByUrl } from "@/actions/form";
import { FormElementInstance } from "@/components/form-elements/FormElements";
import FormSubmitComponent from "@/components/form-submit/FormSubmitComponent";

export default async function SubmitPage({
  params,
}: {
  params: { formUrl: string };
}) {
  const form = await GetFormContentByUrl(params.formUrl);

  if (!form) {
    throw new Error("form not found");
  }

  const formContent = JSON.parse(form.content) as FormElementInstance[];
  return <FormSubmitComponent formUrl={params.formUrl} content={formContent} />;
}
