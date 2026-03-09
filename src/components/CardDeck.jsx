import { useState, useEffect } from 'react'

export default function CardDeck({ cards, onCardClick, emptyMessage = "No more cards!" }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDealing, setIsDealing] = useState(false)
  const [dealingAnimation, setDealingAnimation] = useState(false)

  useEffect(() => {
    // Add CSS animations
    const style = document.createElement('style')
    style.innerHTML = `
      @keyframes dealCard {
        0% {
          transform: translateX(200px) translateY(-100px) scale(0.9) rotateZ(15deg);
          opacity: 1;
        }
        100% {
          transform: translateX(0) translateY(0) scale(1) rotateZ(0deg);
          opacity: 1;
        }
      }
      
      @keyframes deckReduction {
        0% {
          transform: scaleY(1);
        }
        100% {
          transform: scaleY(0.95);
        }
      }
      
      .dealing-animation {
        animation: dealCard 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      }
      
      .deck-animation {
        animation: deckReduction 0.4s ease-out;
      }
    `
    document.head.appendChild(style)
    
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  const dealNextCard = () => {
    if (currentIndex < cards.length - 1) {
      setDealingAnimation(true)
      setIsDealing(true)
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1)
        setDealingAnimation(false)
        setIsDealing(false)
      }, 800)
    }
  }

  const dealPreviousCard = () => {
    if (currentIndex > 0) {
      setIsDealing(true)
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1)
        setIsDealing(false)
      }, 300)
    }
  }

  const resetDeck = () => {
    setIsDealing(true)
    setTimeout(() => {
      setCurrentIndex(0)
      setIsDealing(false)
    }, 300)
  }

  const currentCard = cards && cards.length > 0 ? cards[currentIndex] : null
  const hasMore = currentIndex < (cards?.length || 0) - 1
  const hasPrevious = currentIndex > 0
  const cardsRemaining = (cards?.length || 0) - currentIndex

  if (!cards || cards.length === 0) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center', color: '#d0d0d0' }}>
        <p>{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', padding: '2rem' }}>
      {/* Main Container with Card on Left and Deck on Right */}
      <div style={{ display: 'flex', gap: '5rem', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'row-reverse', width: '100%', maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Deck Visualization - Right Side */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', minWidth: '200px', maxWidth: '284px' }}>
          <div
            className={dealingAnimation ? 'deck-animation' : ''}
            style={{
              position: 'relative',
              width: '284px',
              height: '380px',
              perspective: '1000px',
              cursor: hasMore ? 'pointer' : 'not-allowed',
            }}
            onClick={dealNextCard}
          >
            {/* Deck Cards Stack - Balatro Style */}
            {cardsRemaining > 0 && (
              <>
                <div
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, #2d1f0f 0%, #4a3420 50%, #2d1f0f 100%)',
                    border: '2px solid #8b7355',
                    borderRadius: '12px',
                    top: '6px',
                    left: '6px',
                    opacity: 0.3,
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, #2d1f0f 0%, #4a3420 50%, #2d1f0f 100%)',
                    border: '2px solid #8b7355',
                    borderRadius: '12px',
                    top: '3px',
                    left: '3px',
                    opacity: 0.6,
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(180deg, #3d2817 0%, #2d1f0f 50%, #1f1510 100%)',
                    border: '3px solid #8b7355',
                    borderRadius: '12px',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.7), inset 0 2px 4px rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    color: '#8b7355',
                    transition: 'all 0.3s ease',
                    padding: '1rem',
                    textAlign: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <div style={{ fontSize: '3.5rem', lineHeight: '1' }}>🂠</div>
                  <div style={{ fontSize: '1.1rem', fontFamily: 'Georgia, serif', textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}>Deck</div>
                </div>
              </>
            )}
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: '#8b7355', fontWeight: '700', fontSize: '1rem', marginBottom: '0.5rem' }}>
              {cardsRemaining} cards
            </p>
            <p style={{ color: '#a0a098', fontSize: '0.85rem' }}>
              remaining
            </p>
          </div>
        </div>

        {/* Card Display Area - Left Side */}
        <div style={{ position: 'relative', height: '430px', width: '100%', maxWidth: '284px', perspective: '1000px' }}>
          {/* Stacked cards in background (visual effect) */}
          <>
            <div
              style={{
                position: 'absolute',
                top: '8px',
                left: '8px',
                width: '100%',
                height: '380px',
                background: 'linear-gradient(135deg, #c4b5a0 0%, #9a8878 50%, #c4b5a0 100%)',
                border: '3px solid #8b7355',
                borderRadius: '12px',
                opacity: 0.3,
                zIndex: 0,
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '4px',
                left: '4px',
                width: '100%',
                height: '380px',
                background: 'linear-gradient(135deg, #c4b5a0 0%, #9a8878 50%, #c4b5a0 100%)',
                border: '3px solid #8b7355',
                borderRadius: '12px',
                opacity: 0.5,
                zIndex: 1,
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
              }}
            />
          </>

          {/* Current Card */}
          {currentCard ? (
            <div
              key={currentIndex}
              onClick={() => onCardClick && onCardClick(currentCard)}
              className={dealingAnimation ? 'dealing-animation' : ''}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '380px',
                background: 'linear-gradient(135deg, #e8dcc8 0%, #d9cdb5 50%, #cbbf9f 100%)',
                border: '3px solid #8b7355',
                borderRadius: '12px',
                padding: '2rem 1.5rem',
                zIndex: 10,
                cursor: 'pointer',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              {/* Top Corner - Suit and Rank */}
              <div style={{ alignSelf: 'flex-start', textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: '#8b7355',
                    lineHeight: '1',
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  {currentCard.suit}
                </div>
              </div>

              {/* Card Content */}
              <div style={{ textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
                <h3 style={{ fontSize: '1.6rem', color: '#5a4a38', marginBottom: '0.8rem', fontFamily: 'Georgia, serif', fontWeight: 'bold', textShadow: '0 1px 2px rgba(255, 255, 255, 0.3)' }}>
                  {currentCard.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#5a4a38', lineHeight: '1.5', marginBottom: '1rem' }}>
                  {currentCard.description}
                </p>
                {currentCard.technologies && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginTop: '0.8rem' }}>
                    {currentCard.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        style={{
                          background: 'linear-gradient(135deg, #a0725d 0%, #8b6f55 100%)',
                          color: '#f0ebe0',
                          padding: '0.35rem 0.9rem',
                          borderRadius: '16px',
                          fontSize: '0.8rem',
                          fontWeight: '700',
                          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                {currentCard.skills && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginTop: '0.8rem' }}>
                    {currentCard.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        style={{
                          background: 'linear-gradient(135deg, #a0725d 0%, #8b6f55 100%)',
                          color: '#f0ebe0',
                          padding: '0.35rem 0.9rem',
                          borderRadius: '16px',
                          fontSize: '0.8rem',
                          fontWeight: '700',
                          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Corner - Suit and Card Counter */}
              <div style={{ alignSelf: 'flex-end', textAlign: 'center', fontSize: '0.85rem', color: '#8b7355', fontWeight: '600' }}>
                <div style={{ fontSize: '1.5rem', color: '#8b7355', marginBottom: '0.25rem' }}>
                  {currentCard.suit}
                </div>
                <div>Card {currentIndex + 1}/{cards.length}</div>
              </div>
            </div>
          ) : (
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '380px',
                background: 'linear-gradient(135deg, #e8dcc8 0%, #d9cdb5 50%, #cbbf9f 100%)',
                border: '3px solid #8b7355',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#8b7355',
                fontSize: '1.2rem',
              }}
            >
              No card available
            </div>
          )}
        </div>
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button
          onClick={dealPreviousCard}
          disabled={!hasPrevious}
          style={{
            background: hasPrevious ? '#a0725d' : '#999',
            color: '#f0ebe0',
            border: 'none',
            padding: '0.8rem 1.5rem',
            borderRadius: '5px',
            cursor: hasPrevious ? 'pointer' : 'not-allowed',
            fontWeight: '600',
            fontSize: '1rem',
            transition: 'all 0.3s ease',
            opacity: hasPrevious ? 1 : 0.5,
          }}
          onMouseEnter={(e) => {
            if (hasPrevious) {
              e.target.style.transform = 'translateY(-2px)'
              e.target.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.4)'
            }
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)'
            e.target.style.boxShadow = 'none'
          }}
        >
          ← Previous
        </button>

        <button
          onClick={resetDeck}
          style={{
            background: '#a0725d',
            color: '#f0ebe0',
            border: 'none',
            padding: '0.8rem 1.5rem',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '1rem',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)'
            e.target.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.4)'
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)'
            e.target.style.boxShadow = 'none'
          }}
        >
          🔄 Reset Deck
        </button>

        <button
          onClick={dealNextCard}
          disabled={!hasMore}
          style={{
            background: hasMore ? '#a0725d' : '#999',
            color: '#f0ebe0',
            border: 'none',
            padding: '0.8rem 1.5rem',
            borderRadius: '5px',
            cursor: hasMore ? 'pointer' : 'not-allowed',
            fontWeight: '600',
            fontSize: '1rem',
            transition: 'all 0.3s ease',
            opacity: hasMore ? 1 : 0.5,
          }}
          onMouseEnter={(e) => {
            if (hasMore) {
              e.target.style.transform = 'translateY(-2px)'
              e.target.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.4)'
            }
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)'
            e.target.style.boxShadow = 'none'
          }}
        >
          Deal Next →
        </button>
      </div>
    </div>
  )
}
