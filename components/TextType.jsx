import { createElement, useEffect, useMemo, useState } from "react";

import styles from "./TextType.module.css";

const TextType = ({
  text,
  as: Component = "div",
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  className = "",
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = "|",
  cursorClassName = "",
  textColors = [],
  onSentenceComplete,
  reverseMode = false,
  ...props
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const textArray = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);

  const currentText = textArray[currentTextIndex] || "";
  const processedText = reverseMode ? currentText.split("").reverse().join("") : currentText;

  useEffect(() => {
    let timeout;

    if (isDeleting) {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
        }, deletingSpeed);
      } else {
        if (onSentenceComplete) {
          onSentenceComplete(textArray[currentTextIndex], currentTextIndex);
        }

        const isLastSentence = currentTextIndex === textArray.length - 1;

        if (!loop && isLastSentence) {
          return undefined;
        }

        timeout = setTimeout(() => {
          setIsDeleting(false);
          setCurrentCharIndex(0);
          setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
        }, 150);
      }
    } else if (currentCharIndex < processedText.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + processedText[currentCharIndex]);
        setCurrentCharIndex((prev) => prev + 1);
      }, currentCharIndex === 0 ? initialDelay : typingSpeed);
    } else {
      const isLastSentence = currentTextIndex === textArray.length - 1;
      if (!loop && isLastSentence) {
        return undefined;
      }

      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    }

    return () => clearTimeout(timeout);
  }, [
    currentCharIndex,
    currentTextIndex,
    deletingSpeed,
    displayedText,
    initialDelay,
    isDeleting,
    loop,
    onSentenceComplete,
    pauseDuration,
    processedText,
    textArray,
    typingSpeed,
  ]);

  const shouldHideCursor =
    hideCursorWhileTyping && (currentCharIndex < processedText.length || isDeleting);

  const currentColor =
    textColors.length > 0 ? textColors[currentTextIndex % textColors.length] : "inherit";

  return createElement(
    Component,
    {
      className: `${styles.textType} ${className}`.trim(),
      ...props,
    },
    <>
      <span className={styles.content} style={{ color: currentColor }}>
        {displayedText}
      </span>
      {showCursor && (
        <span
          className={`${styles.cursor} ${shouldHideCursor ? styles.cursorHidden : ""} ${cursorClassName}`.trim()}
          aria-hidden
        >
          {cursorCharacter}
        </span>
      )}
    </>
  );
};

export default TextType;
