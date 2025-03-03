import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
 
import { siteConfig,ProjectPreviewList } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { ProjectList } from "@/components/ProjectsList";


export default function Home() {
  return (
    <section className="flex-col items-center justify-left gap-4 py-8 md:py-10">
      <div className="flex flex-col items-center">
      <h2 className={title()}>Welcome to {siteConfig.title}</h2>
      <h2 className={subtitle()}>
       {siteConfig.description}
      </h2>
      </div>
      
     
        <ProjectList></ProjectList>
        
    </section>

    
  );
}
