#include <jni.h>
#include "react-native-view-resizer.h"

extern "C"
JNIEXPORT jdouble JNICALL
Java_com_viewresizer_ViewResizerModule_nativeMultiply(JNIEnv *env, jclass type, jdouble a, jdouble b) {
    return viewresizer::multiply(a, b);
}
