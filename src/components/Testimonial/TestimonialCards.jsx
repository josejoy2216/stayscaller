import React from 'react';

const TestimonialCards = () => {
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      text: "Stay Scaler helped us make sense of all the data we were gathering. Their approach to analytics gave us clarity about our pricing strategies, and we're already seeing an uptick in direct bookings.",
      author: "Priya Malhotra"
    },
    {
      id: 2,
      text: "The team at Stay Scaler was proactive and responsive. We had no idea how important reputation management was until they showed us a new way to engage with guests online.",
      author: "Rajesh Singh"
    },
    {
      id: 3,
      text: "Their digital marketing insights made a huge difference in our off-season occupancy rates. We're excited to keep growing with Stay Scaler.",
      author: "Sarah Patel"
    }
  ];

  return (
    <div className="testimonial-section" style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px'
    }}>
      {/* Horizontal scrolling container for all screen sizes */}
      <div className="testimonial-container" style={{
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
        gap: '20px', 
        paddingBottom: '20px',
        scrollBehavior: 'smooth',
        WebkitOverflowScrolling: 'touch'
      }}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} style={{
            flex: '0 0 auto',
            width: '350px',
            minWidth: '350px',
            padding: '20px',
            border: '1px solid #e0e0e0',
            borderRadius: '10px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            backgroundColor: 'white'
          }}>
            {/* Testimonial text */}
            <div style={{
              flex: '1',
              marginBottom: '15px'
            }}>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.6',
                color: '#333'
              }}>{testimonial.text}</p>
            </div>
            
            {/* Author */}
            <div style={{
              borderTop: '1px solid #f0f0f0',
              paddingTop: '15px'
            }}>
              <p style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '5px'
              }}>— {testimonial.author}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll indicators */}
      {/* <div className="scroll-indicators" style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '8px',
        marginTop: '16px'
      }}>
        {testimonials.map((_, index) => (
          <div key={index} style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: index === 0 ? '#6a329f' : '#e0e0e0'
          }}></div>
        ))}
      </div> */}
    </div>
  );
};

// Style injection for clean scrollbars
const HorizontalTestimonialCards = () => {
  // Inject the CSS for hiding scrollbars but keeping functionality
  React.useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
      .testimonial-container {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
      }
      
      .testimonial-container::-webkit-scrollbar {
        display: none;  /* Chrome, Safari and Opera */
      }
    `;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);
  
  return <TestimonialCards />;
};

export default HorizontalTestimonialCards;