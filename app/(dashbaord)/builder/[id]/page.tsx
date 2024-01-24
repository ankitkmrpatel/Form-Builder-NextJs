import { GetFormById } from "@/actions/form";
import FormBuilder from "@/components/form-elements/FormBuilder";

export default async function BuilderPage({
  params,
}: {
  params: { id: string };
}) {
  const {id } = params;
  const form = await GetFormById(Number(id));
  if (form == null) throw new Error("Form not found.");

  return <FormBuilder form={form} />;
}
