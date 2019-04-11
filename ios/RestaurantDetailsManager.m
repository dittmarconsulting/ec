#import <Foundation/Foundation.h>
#import "RestaurantDetails.h"
#import "RestaurantDetailsManager.h"

// import RCTBridge
#if __has_include(<React/RCTBridge.h>)
#import <React/RCTBridge.h>
#elif __has_include(“RCTBridge.h”)
#import “RCTBridge.h”
#else
#import “React/RCTBridge.h” // Required when used as a Pod in a Swift project
#endif

@implementation RestaurantDetailsManager
@synthesize bridge = _bridge;

// export a native module
RCT_EXPORT_MODULE();

// export props
RCT_EXPORT_VIEW_PROPERTY(url, NSString)
RCT_EXPORT_VIEW_PROPERTY(onButtonPressed, RCTBubblingEventBlock)


// return native view to the React component
- (UIView *)view
{
  return [[RestaurantDetails alloc] initWithEventDispatcher:self.bridge.eventDispatcher];
}



// avoid Yellowbox warning
// https://stackoverflow.com/questions/50773748/difference-requiresmainqueuesetup-and-dispatch-get-main-queue
+ (BOOL)requiresMainQueueSetup
{
  return YES;
}

@end
