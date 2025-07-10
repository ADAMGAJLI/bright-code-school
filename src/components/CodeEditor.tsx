
import { useState } from 'react';
import { Play, RotateCcw, Copy, Check } from 'lucide-react';

interface CodeEditorProps {
  initialCode?: string;
  language?: string;
  readOnly?: boolean;
  showOutput?: boolean;
}

const CodeEditor = ({ 
  initialCode = '// اكتب كودك هنا\nconsole.log("مرحبا بالعالم!");', 
  language = 'javascript',
  readOnly = false,
  showOutput = true 
}: CodeEditorProps) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const runCode = () => {
    try {
      // Create a mock console for capturing output
      const mockConsole = {
        log: (...args: any[]) => {
          setOutput(prev => prev + args.join(' ') + '\n');
        }
      };
      
      setOutput('');
      
      // Simple JavaScript evaluation (in real app, use a safe sandbox)
      const func = new Function('console', code);
      func(mockConsole);
    } catch (error) {
      setOutput(`خطأ: ${error}`);
    }
  };

  const resetCode = () => {
    setCode(initialCode);
    setOutput('');
  };

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy code');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Editor Header */}
      <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="mr-4 text-sm font-medium">محرر الكود</span>
        </div>
        <div className="flex space-x-2 rtl:space-x-reverse">
          <button
            onClick={copyCode}
            className="p-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors"
            title="نسخ الكود"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </button>
          <button
            onClick={resetCode}
            className="p-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors"
            title="إعادة تعيين"
          >
            <RotateCcw size={16} />
          </button>
          {showOutput && (
            <button
              onClick={runCode}
              className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded transition-colors flex items-center space-x-1 rtl:space-x-reverse"
            >
              <Play size={16} />
              <span>تشغيل</span>
            </button>
          )}
        </div>
      </div>

      <div className={`grid ${showOutput ? 'md:grid-cols-2' : 'grid-cols-1'} gap-0`}>
        {/* Code Area */}
        <div className="p-0">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            readOnly={readOnly}
            className="w-full h-64 p-4 font-mono text-sm bg-gray-900 text-green-400 border-none outline-none resize-none"
            placeholder="اكتب كودك هنا..."
            dir="ltr"
          />
        </div>

        {/* Output Area */}
        {showOutput && (
          <div className="border-r border-gray-300">
            <div className="bg-gray-100 p-2 border-b">
              <span className="text-sm font-medium text-gray-700">النتيجة:</span>
            </div>
            <pre className="h-64 p-4 bg-white text-gray-800 text-sm font-mono overflow-auto whitespace-pre-wrap">
              {output || 'اضغط على "تشغيل" لرؤية النتيجة...'}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeEditor;
