import NextImage from 'next/image';
import { ProjectPreviewProps } from '@/config/site';
import { Button } from '@heroui/button';
export function ProjectPreview(props: ProjectPreviewProps) {
 
    
    return (
    
        <div className="flex flex-col items-start justify-center w-full h-full">
            <h2 className="text-2xl font-bold">{props.title}</h2> '($S{props.index})'  
                <NextImage 
                 src={props.image} alt="UU Thumbnail" width={200} height={200}>
                </NextImage>
                <p>{props.description}</p>
            
            <Button color='primary' href={props.href}>
                PLAY
            </Button>
            
                
        </div>
            
        
        
        );
}