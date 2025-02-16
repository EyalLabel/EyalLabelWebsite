import NextImage from 'next/image';

export default function ProjectPreview() {
 
    
    return (
    
        <div className="flex flex-col items-start justify-center w-full h-full">
        
        <NextImage 
        src="/LabelUpLogo.png" alt="UU Thumbnail" width={200} height={200}>

        </NextImage>
        </div>
            
        
        
        );
}