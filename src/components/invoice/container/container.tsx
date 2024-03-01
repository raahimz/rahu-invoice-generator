import { ContainerProps } from "./container.props";

export default function Container(props: ContainerProps) {
    return (
        <div className={`flex flex-col gap-1 border-2 border-black w-${props.width} h-[150px] overflow-y-auto`}>
            <div className='bg-teal-500 p-2 flex justify-center items-center uppercase font-mono border-2 border-teal-600'>
                {props.title}
            </div>
            <div className='flex flex-col px-2'>
                {props.body}
            </div>
        </div>
    );
}