const QuizCard = ({
  quiz,
  onAnswer,
  userAnswer,
  showResult = false,
  isAdmin = false,
  onEdit,
  onDelete
}) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 mb-6 relative">
      {isAdmin && (
        <div className="absolute top-3 right-3 flex gap-2">
          <button
            onClick={() => onEdit(quiz)}
            className="text-yellow-500 hover:text-yellow-700"
            title="Edit"
          >
            ✏️
          </button>
          <button
            onClick={() => onDelete(quiz.id)}
            className="text-red-500 hover:text-red-700"
            title="Delete"
          >
            🗑️
          </button>
        </div>
      )}

      <h4 className="text-lg font-semibold mb-4">{quiz.question}</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {quiz.options.map((option, index) => {
          const isCorrect = showResult && option === quiz.answer;
          const isSelected = userAnswer === option;

          return (
            <button
              key={index}
              onClick={() => onAnswer(option)}
              disabled={showResult}
              className={`px-4 py-2 rounded-lg transition
                ${
                  showResult
                    ? isCorrect
                      ? "bg-green-200 text-green-800"
                      : isSelected
                      ? "bg-red-200 text-red-800"
                      : "bg-gray-100 text-gray-600"
                    : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuizCard;
