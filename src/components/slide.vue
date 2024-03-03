<template>
  <div class="slide">
    <div class="slide__header">
      <div class="slide__progressbar">
        <progressbar />
      </div>
      <user name="React.reposit" :avatar="require('@/assets/img/user-2.png')"/>
    </div>
    <div class="slide__content">
      <img class="slide__content-img" src="@/assets/img/slide-content.png" alt="">
      <div class="slide__content-text">
        <p>
          The easiest way to get .NET 6 Preview 4 is to install the maui-check dotnet tool from CLI and follow the instructions.
        </p>
        <p>
          For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps.
          We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.
        </p>
        <p>
          In Preview 4 we enable push/pop navigation with NavigationPage.
          We added a concrete implementation of IWindow, and completed porting ContentPage from Xamarin.Forms
        </p>
        <p>
          For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps.
          We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.
        </p>
        <p>
          For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps.
          We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.
        </p>
        <p>
          The easiest way to get .NET 6 Preview 4 is to install the maui-check dotnet tool from CLI and follow the instructions.
        </p>
      </div>
    </div>
    <div class="slide__footer">
      <btn wide>Follow</btn>
    </div>
  </div>
</template>

<script>
import user from '@/components/user'
import btn from '@/components/btn'
import progressbar from '@/components/progressbar'

export default {
  name: 'slide',
  components: {
    user,
    btn,
    progressbar
  }
}
</script>
