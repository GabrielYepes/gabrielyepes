import { workStatus } from '../config';

export default function WorkStatus() {
    const { isAvailable } = workStatus;

    return (
        <a 
            href="mailto:gabsyepes@gmail.com"
            className={`inline-flex items-center gap-2 p-1 pl-3 pr-3 rounded-full
                      ${isAvailable ? 'bg-green-500' : 'bg-red-500'}
                      transition-transform hover:scale-105 cursor-pointer`}
        >
            {/* Animated status dot */}
            <div 
                className={`w-2 h-2 rounded-full animate-pulse
                          ${isAvailable ? 'bg-green-200' : 'bg-red-200'}`}
            />
            
            {/* Status text */}
            <span className="text-white text-sm font-medium">
                {isAvailable 
                    ? "I'm available to work!" 
                    : "Busy with work! You can still contact me"}
            </span>
        </a>
    );
}