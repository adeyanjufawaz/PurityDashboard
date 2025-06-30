import React from 'react';
import { 
  FaBell, 
  FaShoppingBag, 
  FaShoppingCart, 
  FaCreditCard, 
  FaBox 
} from 'react-icons/fa';

interface OrderItem {
  id: string;
  title: string;
  subtitle?: string;
  timestamp: string;
  icon: 'bell' | 'bag' | 'cart' | 'card' | 'package';
  amount?: string;
}

const OrdersOverview: React.FC = () => {
  const orderItems: OrderItem[] = [
    {
      id: '1',
      title: 'Design changes',
      amount: '$2400',
      timestamp: '22 DEC 7:20 PM',
      icon: 'bell'
    },
    {
      id: '2',
      title: 'New order #4219423',
      timestamp: '21 DEC 11:21 PM',
      icon: 'bag'
    },
    {
      id: '3',
      title: 'Server Payments for April',
      timestamp: '21 DEC 9:28 PM',
      icon: 'cart'
    },
    {
      id: '4',
      title: 'New card added for order #3210145',
      timestamp: '20 DEC 3:52 PM',
      icon: 'card'
    },
    {
      id: '5',
      title: 'Unlock packages for Development',
      timestamp: '19 DEC 11:35 PM',
      icon: 'package'
    }
  ];

  const getIcon = (iconType: string) => {
    const iconProps = { size: 20,  };
    
    switch (iconType) {
      case 'bell':
        return <FaBell {...iconProps} />;
      case 'bag':
        return <FaShoppingBag {...iconProps} />;
      case 'cart':
        return <FaShoppingCart {...iconProps} />;
      case 'card':
        return <FaCreditCard {...iconProps} />;
      case 'package':
        return <FaBox {...iconProps} />;
      default:
        return <FaBell {...iconProps} />;
    }
  };

  const getIconBgColor = (iconType: string) => {
    switch (iconType) {
      case 'bell':
        return 'text-teal-500';
      case 'bag':
        return 'text-orange-500';
      case 'cart':
        return 'text-blue-500';
      case 'card':
        return 'text-yellow-500';
      case 'package':
        return 'text-purple-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className=" text-textCol p-6 rounded-lg w-full max-w-md mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Orders Overview</h2>
        <div className="flex items-center">
          <span className="text-teal-400 text-lg font-bold mr-2">30%</span>
          <span className="text-gray-400">this month.</span>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-600"></div>
        
        {orderItems.map((item, index) => (
          <div key={item.id} className="relative flex items-start mb-8 last:mb-0">
            {/* Icon */}
            <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${getIconBgColor(item.icon)} relative z-10`}>
              {getIcon(item.icon)}
            </div>
            
            {/* Content */}
            <div className="ml-4 flex-1">
              <div className="flex items-center justify-between">
                <h3 className=" font-medium text-sm leading-tight">
                  {item.amount && (
                    <span className=" mr-2">{item.amount},</span>
                  )}
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-400 text-xs mt-1">{item.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersOverview;