

export class ChessMenu {
    constructor(){
      this.reset()
    }
    reset(){
      this.option_game = false;
      this.option_edit = false;
      this.option_view = false;
    }

    displayMenu(){
    
        if(this.option_game === true)
        {
            $('.submenu_game').css('display','block')
            $('.edit').css('display','none')
            $('.view').css('display','none')
            $('#game_text').text('<-')
        }
        else if(this.option_edit === true)
        {
            $('.submenu_edit').css('display','block')
            $('.game').css('display','none')
            $('.view').css('display','none')
            $('#edit_text').text('<-')
        }
        else if(this.option_view === true)
        {
            $('.submenu_view').css('display','block')
            $('.edit').css('display','none')
            $('.game').css('display','none')
            $('#view_text').text('<-')
        }
        else
        {
            $('.submenu_game').css('display','none')
            $('.submenu_edit').css('display','none')
            $('.submenu_view').css('display','none')
            $('#game_text').text('New game')
            $('#edit_text').text('Edit position')
            $('#view_text').text('View')
            $('.game').css('display','block')
            $('.edit').css('display','block')
            $('.view').css('display','block')
    
        }
        
    }

    toggleGameMenu(){

        if(this.option_game === true)
        {
            this.option_game = false
            this.option_edit = false
            this.option_view = false
        }
        else
        {
            this.option_game = true
        }
    
        this.displayMenu();
    
    }

    toggleEditMenu(){
    
        if(this.option_edit === true)
        {
            this.option_game = false
            this.option_edit = false
            this.option_view = false
        }
        else
        {
            this.option_edit = true
        }
    
        this.displayMenu();
    
    }

    toggleViewMenu(){

        if(this.option_view === true)
        {
            this.option_game = false
            this.option_edit = false
            this.option_view = false
        }
        else
        {
            this.option_view = true
        }
    
        this.displayMenu();
    
    }    

    
}
  