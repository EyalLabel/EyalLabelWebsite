import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
 
import { siteConfig,ProjectPreviewList } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { ProjectPreview } from "@/components/project-preview";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <h2 className={title()}>Welcome to {siteConfig.title}</h2>
      <h2 className={subtitle()}>
       {siteConfig.description}
      </h2>
    {/* 
        <ul className="flex gap-4"> 
          {ProjectPreviewList.previews.map((preview) => (
            <li key={preview.index}>
              <ProjectPreview {...preview} />
            </li>
          ))}

        </ul>
        */}
    </section>

    
  );
}
