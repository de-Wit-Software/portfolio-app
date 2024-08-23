import ContextWrapper from "@/app/context";
import Resume from "@/components/features/resume/resume.feature.component";


const Page = ContextWrapper(
  'en',
  (props: any) => {
    return <Resume appState={props.appState}></Resume>
  }
);

export default Page;
