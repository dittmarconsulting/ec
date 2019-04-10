// import UIKit to subclass off UIView
#import <UIKit/UIKit.h>

@class RCTEventDispatcher;

@interface RestaurantDetails : UIView

  // define view properties here with @property
  @property (nonatomic, assign) NSString *url;

  // init with the event dispatcher allows us to communicate with JS
  - (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher NS_DESIGNATED_INITIALIZER;

@end
