
import { Check, Lock } from 'lucide-react';

interface ProgressTrackerProps {
  completedLessons: number[];
  totalLessons: number;
  currentLesson?: number;
}

const ProgressTracker = ({ completedLessons, totalLessons, currentLesson }: ProgressTrackerProps) => {
  const progress = (completedLessons.length / totalLessons) * 100;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">📈 تقدمك في التعلم</h3>
      
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>التقدم الإجمالي</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Lessons Status */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
        {Array.from({ length: totalLessons }, (_, i) => i + 1).map((lessonNum) => {
          const isCompleted = completedLessons.includes(lessonNum);
          const isCurrent = currentLesson === lessonNum;
          const isLocked = lessonNum > 1 && !completedLessons.includes(lessonNum - 1) && !isCompleted;

          return (
            <div
              key={lessonNum}
              className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                isCompleted
                  ? 'bg-green-500 text-white'
                  : isCurrent
                  ? 'bg-blue-500 text-white animate-pulse'
                  : isLocked
                  ? 'bg-gray-300 text-gray-500'
                  : 'bg-yellow-400 text-gray-800'
              }`}
            >
              {isCompleted ? (
                <Check size={16} />
              ) : isLocked ? (
                <Lock size={16} />
              ) : (
                lessonNum
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-4 text-center">
        <p className="text-gray-600">
          أكملت <span className="font-bold text-green-600">{completedLessons.length}</span> من أصل{' '}
          <span className="font-bold text-blue-600">{totalLessons}</span> دروس
        </p>
      </div>
    </div>
  );
};

export default ProgressTracker;
