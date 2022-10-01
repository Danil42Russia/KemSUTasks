object Form1: TForm1
  Left = 0
  Top = 0
  BorderIcons = [biSystemMenu]
  BorderStyle = bsSingle
  Caption = 'Figure'
  ClientHeight = 509
  ClientWidth = 731
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'Tahoma'
  Font.Style = []
  Position = poScreenCenter
  OnActivate = FormActivate
  OnCreate = FormCreate
  PixelsPerInch = 96
  TextHeight = 13
  object GroupBoxParams: TGroupBox
    Left = 1
    Top = 0
    Width = 185
    Height = 209
    Caption = #1055#1072#1088#1072#1084#1077#1090#1088#1099' '#1079#1072#1075#1086#1090#1086#1074#1082#1080
    TabOrder = 0
    object LabelParamsOsnov: TLabel
      Left = 16
      Top = 130
      Width = 66
      Height = 13
      Caption = #1044#1080#1072#1084#1077#1090#1088' ('#1089#1084')'
    end
    object LabelParamsHeight: TLabel
      Left = 16
      Top = 156
      Width = 59
      Height = 13
      Caption = #1042#1099#1089#1086#1090#1072' ('#1089#1084')'
    end
    object LabelParamsMaterial: TLabel
      Left = 16
      Top = 184
      Width = 50
      Height = 13
      Caption = #1052#1072#1090#1077#1088#1080#1072#1083
    end
    object DBRadioGroup1: TDBRadioGroup
      Left = 3
      Top = 24
      Width = 171
      Height = 96
      Caption = #1042#1099#1073#1077#1088#1080#1090#1077' '#1086#1089#1085#1086#1074#1072#1085#1080#1077
      Ctl3D = True
      ParentCtl3D = False
      TabOrder = 0
    end
    object RBtnCil: TRadioButton
      Left = 16
      Top = 41
      Width = 113
      Height = 17
      Caption = #1050#1088#1091#1075
      Checked = True
      TabOrder = 1
      TabStop = True
      OnClick = EditZagotClick
    end
    object RBtnPar: TRadioButton
      Left = 16
      Top = 64
      Width = 113
      Height = 17
      Caption = #1050#1074#1072#1076#1088#1072#1090
      TabOrder = 2
      OnClick = EditZagotClick
    end
    object EditParamsOsnov: TEdit
      Left = 88
      Top = 126
      Width = 57
      Height = 21
      NumbersOnly = True
      TabOrder = 3
      Text = '0'
    end
    object EditParamsHeight: TEdit
      Left = 88
      Top = 153
      Width = 57
      Height = 21
      NumbersOnly = True
      TabOrder = 4
      Text = '0'
    end
    object CBoxMaterial: TComboBox
      Left = 88
      Top = 180
      Width = 57
      Height = 21
      TabOrder = 5
    end
    object RBtnPri: TRadioButton
      Left = 16
      Top = 87
      Width = 113
      Height = 17
      Caption = #1055#1088#1080#1079#1084#1072
      TabOrder = 6
      OnClick = EditZagotClick
    end
  end
  object GroupBoxDeform: TGroupBox
    Left = 1
    Top = 215
    Width = 185
    Height = 74
    Caption = #1056#1072#1089#1095#1077#1090' '#1076#1077#1092#1086#1088#1084#1072#1094#1080#1080
    TabOrder = 1
    object LabelDeformOsnovData: TLabel
      Left = 102
      Top = 24
      Width = 20
      Height = 13
      Caption = '0 '#1089#1084
    end
    object LabelDeformHeightData: TLabel
      Left = 102
      Top = 43
      Width = 20
      Height = 13
      Caption = '0 '#1089#1084
    end
    object LabelDeformOsnov: TLabel
      Left = 24
      Top = 24
      Width = 58
      Height = 13
      Caption = #1044#1080#1072#1084#1077#1090#1088' = '
    end
    object LabelDeformHeight: TLabel
      Left = 24
      Top = 43
      Width = 51
      Height = 13
      Caption = #1042#1099#1089#1086#1090#1072' = '
    end
  end
  object BtnCalk: TButton
    Left = 24
    Top = 301
    Width = 137
    Height = 25
    Caption = #1056#1072#1089#1095#1077#1090
    TabOrder = 2
    OnClick = BtnCalkClick
  end
  object BtnExit: TButton
    Left = 24
    Top = 351
    Width = 137
    Height = 25
    Caption = #1042#1099#1093#1086#1076
    TabOrder = 3
    OnClick = BtnExitClick
  end
  object GroupBoxVisualization: TGroupBox
    Left = 192
    Top = 0
    Width = 531
    Height = 505
    Caption = #1042#1080#1076' '#1079#1072#1075#1086#1090#1086#1074#1082#1080
    TabOrder = 4
    object ImageZagot: TImage
      Left = 3
      Top = 16
      Width = 525
      Height = 485
    end
  end
end
