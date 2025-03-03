import NextImage from 'next/image';
import { ProjectPreviewProps } from '@/config/site';
import { Button } from '@heroui/button';
import Link from 'next/link';
export function ProjectPreview(props: ProjectPreviewProps) {
 
    
    return (
    
        <div className="flex flex-col items-start justify-left w-full h-full">
            <h2 className="text-2xl font-bold">{props.title} (0{props.index}) </h2> 
            <p className="mt-4">{props.description}</p>
            <section className='flex justify-center items-center w-full  pr-20'>
            
            <NextImage 
                 src={props.image} 
                 alt={props.title} 
                 width={200} 
                 height={200}>
                
                </NextImage>
                
            </section>    
            <Button as={Link} href={props.href} color='default' variant="bordered">
                PLAY
            </Button>
            
                
        </div>

        
            
        
        
        );
}