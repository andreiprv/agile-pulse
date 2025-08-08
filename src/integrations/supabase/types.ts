export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      account_names: {
        Row: {
          created_at: string
          created_by: string | null
          description: string | null
          id: string
          is_active: boolean
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          is_active?: boolean
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          is_active?: boolean
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      action_items: {
        Row: {
          assigned_to: string | null
          assignee_email: string | null
          created_at: string
          description: string | null
          due_date: string | null
          id: string
          meeting_id: string
          priority: string | null
          status: string | null
          title: string
          updated_at: string
        }
        Insert: {
          assigned_to?: string | null
          assignee_email?: string | null
          created_at?: string
          description?: string | null
          due_date?: string | null
          id?: string
          meeting_id: string
          priority?: string | null
          status?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          assigned_to?: string | null
          assignee_email?: string | null
          created_at?: string
          description?: string | null
          due_date?: string | null
          id?: string
          meeting_id?: string
          priority?: string | null
          status?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "action_items_meeting_id_fkey"
            columns: ["meeting_id"]
            isOneToOne: false
            referencedRelation: "meetings"
            referencedColumns: ["id"]
          },
        ]
      }
      adoption_applications: {
        Row: {
          address: string | null
          applicant_email: string
          applicant_name: string
          applicant_phone: string | null
          created_at: string
          experience: string | null
          has_yard: boolean | null
          housing_type: string | null
          id: string
          other_pets: string | null
          pet_id: string | null
          reason: string | null
          status: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          address?: string | null
          applicant_email: string
          applicant_name: string
          applicant_phone?: string | null
          created_at?: string
          experience?: string | null
          has_yard?: boolean | null
          housing_type?: string | null
          id?: string
          other_pets?: string | null
          pet_id?: string | null
          reason?: string | null
          status?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          address?: string | null
          applicant_email?: string
          applicant_name?: string
          applicant_phone?: string | null
          created_at?: string
          experience?: string | null
          has_yard?: boolean | null
          housing_type?: string | null
          id?: string
          other_pets?: string | null
          pet_id?: string | null
          reason?: string | null
          status?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "adoption_applications_pet_id_fkey"
            columns: ["pet_id"]
            isOneToOne: false
            referencedRelation: "pets"
            referencedColumns: ["id"]
          },
        ]
      }
      agent_profiles: {
        Row: {
          agent_name: string
          avg_resolution_time: unknown | null
          avg_response_time: unknown | null
          created_at: string
          current_workload: number | null
          department: string
          email: string
          expertise_level: string
          id: string
          is_available: boolean | null
          languages: string[] | null
          max_capacity: number | null
          satisfaction_rating: number | null
          skills: string[]
          specializations: string[] | null
          total_conversations_handled: number | null
          updated_at: string
          user_id: string | null
          working_hours: Json | null
        }
        Insert: {
          agent_name: string
          avg_resolution_time?: unknown | null
          avg_response_time?: unknown | null
          created_at?: string
          current_workload?: number | null
          department: string
          email: string
          expertise_level?: string
          id?: string
          is_available?: boolean | null
          languages?: string[] | null
          max_capacity?: number | null
          satisfaction_rating?: number | null
          skills?: string[]
          specializations?: string[] | null
          total_conversations_handled?: number | null
          updated_at?: string
          user_id?: string | null
          working_hours?: Json | null
        }
        Update: {
          agent_name?: string
          avg_resolution_time?: unknown | null
          avg_response_time?: unknown | null
          created_at?: string
          current_workload?: number | null
          department?: string
          email?: string
          expertise_level?: string
          id?: string
          is_available?: boolean | null
          languages?: string[] | null
          max_capacity?: number | null
          satisfaction_rating?: number | null
          skills?: string[]
          specializations?: string[] | null
          total_conversations_handled?: number | null
          updated_at?: string
          user_id?: string | null
          working_hours?: Json | null
        }
        Relationships: []
      }
      application_change_requests: {
        Row: {
          application_id: string
          approval_required: boolean | null
          approved_at: string | null
          approved_by: string | null
          assigned_to: string | null
          business_justification: string | null
          change_description: string | null
          change_request_number: string
          change_title: string
          change_type: string
          created_at: string | null
          id: string
          impact_assessment: string | null
          priority: string | null
          requested_by: string | null
          status: string | null
          target_release_id: string | null
          testing_requirements: string | null
          updated_at: string | null
          validation_impact: string | null
        }
        Insert: {
          application_id: string
          approval_required?: boolean | null
          approved_at?: string | null
          approved_by?: string | null
          assigned_to?: string | null
          business_justification?: string | null
          change_description?: string | null
          change_request_number: string
          change_title: string
          change_type: string
          created_at?: string | null
          id?: string
          impact_assessment?: string | null
          priority?: string | null
          requested_by?: string | null
          status?: string | null
          target_release_id?: string | null
          testing_requirements?: string | null
          updated_at?: string | null
          validation_impact?: string | null
        }
        Update: {
          application_id?: string
          approval_required?: boolean | null
          approved_at?: string | null
          approved_by?: string | null
          assigned_to?: string | null
          business_justification?: string | null
          change_description?: string | null
          change_request_number?: string
          change_title?: string
          change_type?: string
          created_at?: string | null
          id?: string
          impact_assessment?: string | null
          priority?: string | null
          requested_by?: string | null
          status?: string | null
          target_release_id?: string | null
          testing_requirements?: string | null
          updated_at?: string | null
          validation_impact?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "application_change_requests_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "application_change_requests_target_release_id_fkey"
            columns: ["target_release_id"]
            isOneToOne: false
            referencedRelation: "application_releases"
            referencedColumns: ["id"]
          },
        ]
      }
      application_notifications: {
        Row: {
          application_id: string
          created_at: string | null
          id: string
          message: string
          metadata: Json | null
          notification_type: string
          recipients: string[]
          sent_at: string | null
          status: string | null
          subject: string
        }
        Insert: {
          application_id: string
          created_at?: string | null
          id?: string
          message: string
          metadata?: Json | null
          notification_type: string
          recipients: string[]
          sent_at?: string | null
          status?: string | null
          subject: string
        }
        Update: {
          application_id?: string
          created_at?: string | null
          id?: string
          message?: string
          metadata?: Json | null
          notification_type?: string
          recipients?: string[]
          sent_at?: string | null
          status?: string | null
          subject?: string
        }
        Relationships: [
          {
            foreignKeyName: "application_notifications_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["id"]
          },
        ]
      }
      application_releases: {
        Row: {
          actual_release_date: string | null
          application_id: string
          change_request_id: string | null
          created_at: string | null
          description: string | null
          id: string
          planned_release_date: string | null
          release_notes: string | null
          release_status: string | null
          release_type: string
          rollback_plan: string | null
          updated_at: string | null
          validation_required: boolean | null
          validation_status: string | null
          version: string
        }
        Insert: {
          actual_release_date?: string | null
          application_id: string
          change_request_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          planned_release_date?: string | null
          release_notes?: string | null
          release_status?: string | null
          release_type: string
          rollback_plan?: string | null
          updated_at?: string | null
          validation_required?: boolean | null
          validation_status?: string | null
          version: string
        }
        Update: {
          actual_release_date?: string | null
          application_id?: string
          change_request_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          planned_release_date?: string | null
          release_notes?: string | null
          release_status?: string | null
          release_type?: string
          rollback_plan?: string | null
          updated_at?: string | null
          validation_required?: boolean | null
          validation_status?: string | null
          version?: string
        }
        Relationships: [
          {
            foreignKeyName: "application_releases_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "application_releases_change_request_id_fkey"
            columns: ["change_request_id"]
            isOneToOne: false
            referencedRelation: "application_change_requests"
            referencedColumns: ["id"]
          },
        ]
      }
      application_stakeholders: {
        Row: {
          application_id: string
          created_at: string
          department: string | null
          id: string
          is_primary: boolean | null
          notification_preferences: Json | null
          phone: string | null
          reviewer_type: Database["public"]["Enums"]["reviewer_type"]
          role: string
          updated_at: string
          user_email: string
          user_name: string
        }
        Insert: {
          application_id: string
          created_at?: string
          department?: string | null
          id?: string
          is_primary?: boolean | null
          notification_preferences?: Json | null
          phone?: string | null
          reviewer_type: Database["public"]["Enums"]["reviewer_type"]
          role: string
          updated_at?: string
          user_email: string
          user_name: string
        }
        Update: {
          application_id?: string
          created_at?: string
          department?: string | null
          id?: string
          is_primary?: boolean | null
          notification_preferences?: Json | null
          phone?: string | null
          reviewer_type?: Database["public"]["Enums"]["reviewer_type"]
          role?: string
          updated_at?: string
          user_email?: string
          user_name?: string
        }
        Relationships: []
      }
      applications: {
        Row: {
          application_id: string
          business_criticality: string | null
          category: string | null
          compliance_frameworks: string[] | null
          created_at: string
          current_version: string | null
          deployment_environment: string | null
          description: string | null
          gxp_status: string | null
          id: string
          last_validation_date: string | null
          name: string
          next_release_date: string | null
          next_validation_date: string | null
          platform: string | null
          regulation_status: string | null
          risk_assessment: string | null
          status: string | null
          technology_stack: string | null
          updated_at: string
          validation_status: string | null
          version: string | null
        }
        Insert: {
          application_id: string
          business_criticality?: string | null
          category?: string | null
          compliance_frameworks?: string[] | null
          created_at?: string
          current_version?: string | null
          deployment_environment?: string | null
          description?: string | null
          gxp_status?: string | null
          id?: string
          last_validation_date?: string | null
          name: string
          next_release_date?: string | null
          next_validation_date?: string | null
          platform?: string | null
          regulation_status?: string | null
          risk_assessment?: string | null
          status?: string | null
          technology_stack?: string | null
          updated_at?: string
          validation_status?: string | null
          version?: string | null
        }
        Update: {
          application_id?: string
          business_criticality?: string | null
          category?: string | null
          compliance_frameworks?: string[] | null
          created_at?: string
          current_version?: string | null
          deployment_environment?: string | null
          description?: string | null
          gxp_status?: string | null
          id?: string
          last_validation_date?: string | null
          name?: string
          next_release_date?: string | null
          next_validation_date?: string | null
          platform?: string | null
          regulation_status?: string | null
          risk_assessment?: string | null
          status?: string | null
          technology_stack?: string | null
          updated_at?: string
          validation_status?: string | null
          version?: string | null
        }
        Relationships: []
      }
      appointments: {
        Row: {
          appointment_date: string
          appointment_type: string
          created_at: string
          diagnosis: string | null
          doctor_id: string | null
          duration_minutes: number
          family_member_id: string | null
          id: string
          notes: string | null
          patient_id: string
          prescription: string | null
          status: string
          symptoms: string | null
          updated_at: string
        }
        Insert: {
          appointment_date: string
          appointment_type: string
          created_at?: string
          diagnosis?: string | null
          doctor_id?: string | null
          duration_minutes?: number
          family_member_id?: string | null
          id?: string
          notes?: string | null
          patient_id: string
          prescription?: string | null
          status?: string
          symptoms?: string | null
          updated_at?: string
        }
        Update: {
          appointment_date?: string
          appointment_type?: string
          created_at?: string
          diagnosis?: string | null
          doctor_id?: string | null
          duration_minutes?: number
          family_member_id?: string | null
          id?: string
          notes?: string | null
          patient_id?: string
          prescription?: string | null
          status?: string
          symptoms?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "appointments_family_member_id_fkey"
            columns: ["family_member_id"]
            isOneToOne: false
            referencedRelation: "family_members"
            referencedColumns: ["id"]
          },
        ]
      }
      associates: {
        Row: {
          allocation_end_date: string | null
          allocation_percentage: number
          allocation_start_date: string
          associate_id: string
          cr_resource: string
          created_at: string
          designation: string
          id: string
          it_budgeted: string
          name: string
          project_id: string
          release_type: string | null
          status: string
          sub_tower: string
          tower: string
          updated_at: string
        }
        Insert: {
          allocation_end_date?: string | null
          allocation_percentage: number
          allocation_start_date: string
          associate_id: string
          cr_resource: string
          created_at?: string
          designation: string
          id?: string
          it_budgeted: string
          name: string
          project_id: string
          release_type?: string | null
          status?: string
          sub_tower: string
          tower: string
          updated_at?: string
        }
        Update: {
          allocation_end_date?: string | null
          allocation_percentage?: number
          allocation_start_date?: string
          associate_id?: string
          cr_resource?: string
          created_at?: string
          designation?: string
          id?: string
          it_budgeted?: string
          name?: string
          project_id?: string
          release_type?: string | null
          status?: string
          sub_tower?: string
          tower?: string
          updated_at?: string
        }
        Relationships: []
      }
      audit_trail: {
        Row: {
          action_type: string
          application_id: string | null
          changed_at: string | null
          changed_by: string
          id: string
          ip_address: string | null
          new_values: Json | null
          old_values: Json | null
          reason: string | null
          record_id: string
          table_name: string
        }
        Insert: {
          action_type: string
          application_id?: string | null
          changed_at?: string | null
          changed_by: string
          id?: string
          ip_address?: string | null
          new_values?: Json | null
          old_values?: Json | null
          reason?: string | null
          record_id: string
          table_name: string
        }
        Update: {
          action_type?: string
          application_id?: string | null
          changed_at?: string | null
          changed_by?: string
          id?: string
          ip_address?: string | null
          new_values?: Json | null
          old_values?: Json | null
          reason?: string | null
          record_id?: string
          table_name?: string
        }
        Relationships: []
      }
      bank_accounts: {
        Row: {
          account_name: string
          account_number: string
          account_type: string
          bank_name: string
          created_at: string
          currency: string | null
          current_balance: number | null
          id: string
          is_active: boolean | null
          routing_number: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          account_name: string
          account_number: string
          account_type: string
          bank_name: string
          created_at?: string
          currency?: string | null
          current_balance?: number | null
          id?: string
          is_active?: boolean | null
          routing_number?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          account_name?: string
          account_number?: string
          account_type?: string
          bank_name?: string
          created_at?: string
          currency?: string | null
          current_balance?: number | null
          id?: string
          is_active?: boolean | null
          routing_number?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      bird_sightings: {
        Row: {
          comments: string | null
          common_name: string
          created_at: string
          date_seen: string
          id: string
          latitude: number
          location: string | null
          longitude: number
          scientific_name: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          comments?: string | null
          common_name: string
          created_at?: string
          date_seen: string
          id?: string
          latitude: number
          location?: string | null
          longitude: number
          scientific_name?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          comments?: string | null
          common_name?: string
          created_at?: string
          date_seen?: string
          id?: string
          latitude?: number
          location?: string | null
          longitude?: number
          scientific_name?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      board_participants: {
        Row: {
          board_id: string
          cursor_position: Json | null
          id: string
          is_typing: boolean
          last_seen: string
          name: string | null
          session_id: string
        }
        Insert: {
          board_id: string
          cursor_position?: Json | null
          id?: string
          is_typing?: boolean
          last_seen?: string
          name?: string | null
          session_id: string
        }
        Update: {
          board_id?: string
          cursor_position?: Json | null
          id?: string
          is_typing?: boolean
          last_seen?: string
          name?: string | null
          session_id?: string
        }
        Relationships: []
      }
      boards: {
        Row: {
          board_id: string
          columns: Json
          created_at: string
          expires_at: string
          focus_card_id: string | null
          id: string
          is_anonymous: boolean
          is_locked: boolean
          is_private: boolean
          max_votes_per_user: number
          show_votes: boolean
          template: string
          timer_duration: number | null
          timer_started_at: string | null
          title: string
          updated_at: string
          voting_enabled: boolean
        }
        Insert: {
          board_id: string
          columns?: Json
          created_at?: string
          expires_at?: string
          focus_card_id?: string | null
          id?: string
          is_anonymous?: boolean
          is_locked?: boolean
          is_private?: boolean
          max_votes_per_user?: number
          show_votes?: boolean
          template?: string
          timer_duration?: number | null
          timer_started_at?: string | null
          title?: string
          updated_at?: string
          voting_enabled?: boolean
        }
        Update: {
          board_id?: string
          columns?: Json
          created_at?: string
          expires_at?: string
          focus_card_id?: string | null
          id?: string
          is_anonymous?: boolean
          is_locked?: boolean
          is_private?: boolean
          max_votes_per_user?: number
          show_votes?: boolean
          template?: string
          timer_duration?: number | null
          timer_started_at?: string | null
          title?: string
          updated_at?: string
          voting_enabled?: boolean
        }
        Relationships: []
      }
      bookings: {
        Row: {
          check_in_date: string
          check_out_date: string
          created_at: string
          guest_id: string
          id: string
          number_of_pets: number
          pet_details: Json | null
          property_id: string
          special_requests: string | null
          status: string
          total_price: number
          updated_at: string
        }
        Insert: {
          check_in_date: string
          check_out_date: string
          created_at?: string
          guest_id: string
          id?: string
          number_of_pets?: number
          pet_details?: Json | null
          property_id: string
          special_requests?: string | null
          status?: string
          total_price: number
          updated_at?: string
        }
        Update: {
          check_in_date?: string
          check_out_date?: string
          created_at?: string
          guest_id?: string
          id?: string
          number_of_pets?: number
          pet_details?: Json | null
          property_id?: string
          special_requests?: string | null
          status?: string
          total_price?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "bookings_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "pet_properties"
            referencedColumns: ["id"]
          },
        ]
      }
      cards: {
        Row: {
          bank_name: string
          card_brand: string | null
          card_name: string
          card_type: string
          created_at: string
          expiry_month: number
          expiry_year: number
          id: string
          is_active: boolean | null
          is_primary: boolean | null
          last_four_digits: string
          updated_at: string
          user_id: string
        }
        Insert: {
          bank_name: string
          card_brand?: string | null
          card_name: string
          card_type: string
          created_at?: string
          expiry_month: number
          expiry_year: number
          id?: string
          is_active?: boolean | null
          is_primary?: boolean | null
          last_four_digits: string
          updated_at?: string
          user_id: string
        }
        Update: {
          bank_name?: string
          card_brand?: string | null
          card_name?: string
          card_type?: string
          created_at?: string
          expiry_month?: number
          expiry_year?: number
          id?: string
          is_active?: boolean | null
          is_primary?: boolean | null
          last_four_digits?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      cart_items: {
        Row: {
          created_at: string
          id: string
          product_id: string | null
          quantity: number
          updated_at: string
          user_id: string | null
          weight_option: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          product_id?: string | null
          quantity?: number
          updated_at?: string
          user_id?: string | null
          weight_option?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          product_id?: string | null
          quantity?: number
          updated_at?: string
          user_id?: string | null
          weight_option?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cart_items_grocery_item_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "grocery_items"
            referencedColumns: ["id"]
          },
        ]
      }
      categories: {
        Row: {
          created_at: string
          description: string | null
          display_order: number | null
          id: string
          image_url: string | null
          is_active: boolean | null
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          display_order?: number | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          display_order?: number | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      certificate_alerts: {
        Row: {
          acknowledged_at: string | null
          acknowledged_by: string | null
          alert_type: string
          created_at: string
          domain_id: string
          expires_at: string | null
          id: string
          is_acknowledged: boolean
          message: string
          severity: string
          updated_at: string
          user_id: string
        }
        Insert: {
          acknowledged_at?: string | null
          acknowledged_by?: string | null
          alert_type: string
          created_at?: string
          domain_id: string
          expires_at?: string | null
          id?: string
          is_acknowledged?: boolean
          message: string
          severity?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          acknowledged_at?: string | null
          acknowledged_by?: string | null
          alert_type?: string
          created_at?: string
          domain_id?: string
          expires_at?: string | null
          id?: string
          is_acknowledged?: boolean
          message?: string
          severity?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "certificate_alerts_domain_id_fkey"
            columns: ["domain_id"]
            isOneToOne: false
            referencedRelation: "domains"
            referencedColumns: ["id"]
          },
        ]
      }
      certificate_analytics: {
        Row: {
          created_at: string
          domain_id: string
          event_date: string
          event_type: string
          id: string
          metadata: Json | null
          user_id: string
        }
        Insert: {
          created_at?: string
          domain_id: string
          event_date?: string
          event_type: string
          id?: string
          metadata?: Json | null
          user_id: string
        }
        Update: {
          created_at?: string
          domain_id?: string
          event_date?: string
          event_type?: string
          id?: string
          metadata?: Json | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "certificate_analytics_domain_id_fkey"
            columns: ["domain_id"]
            isOneToOne: false
            referencedRelation: "domains"
            referencedColumns: ["id"]
          },
        ]
      }
      changes: {
        Row: {
          application_id: string
          change_id: string | null
          created_at: string
          description: string | null
          id: string
          planned_release_date: string | null
          priority: string | null
          title: string
          type: string | null
          updated_at: string
        }
        Insert: {
          application_id: string
          change_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
          planned_release_date?: string | null
          priority?: string | null
          title: string
          type?: string | null
          updated_at?: string
        }
        Update: {
          application_id?: string
          change_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
          planned_release_date?: string | null
          priority?: string | null
          title?: string
          type?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      charging_properties: {
        Row: {
          address: string
          amenities: string[] | null
          city: string
          connector_types: string[] | null
          created_at: string | null
          description: string | null
          id: string
          is_active: boolean | null
          is_verified: boolean | null
          latitude: number | null
          longitude: number | null
          max_power_kw: number
          owner_id: string | null
          photos: string[] | null
          postal_code: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          address: string
          amenities?: string[] | null
          city: string
          connector_types?: string[] | null
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          is_verified?: boolean | null
          latitude?: number | null
          longitude?: number | null
          max_power_kw: number
          owner_id?: string | null
          photos?: string[] | null
          postal_code?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          address?: string
          amenities?: string[] | null
          city?: string
          connector_types?: string[] | null
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          is_verified?: boolean | null
          latitude?: number | null
          longitude?: number | null
          max_power_kw?: number
          owner_id?: string | null
          photos?: string[] | null
          postal_code?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      cirs_job_descriptions: {
        Row: {
          created_at: string
          department: string | null
          description: string
          employment_type: string | null
          experience_level: string | null
          id: string
          location: string | null
          preferred_skills: string[] | null
          required_skills: string[] | null
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          department?: string | null
          description: string
          employment_type?: string | null
          experience_level?: string | null
          id?: string
          location?: string | null
          preferred_skills?: string[] | null
          required_skills?: string[] | null
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          department?: string | null
          description?: string
          employment_type?: string | null
          experience_level?: string | null
          id?: string
          location?: string | null
          preferred_skills?: string[] | null
          required_skills?: string[] | null
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      cirs_resume_matches: {
        Row: {
          created_at: string
          cultural_fit_analysis: string | null
          culture_match_score: number | null
          demographic_analysis: string | null
          demographic_match_score: number | null
          education_match_score: number | null
          experience_match_score: number | null
          id: string
          match_score: number
          matched_skills: string[] | null
          missing_skills: string[] | null
          overall_analysis: string | null
          ranking: number
          recommendation: string | null
          resume_id: string
          screening_session_id: string
          skill_match_score: number | null
          strengths: string | null
          updated_at: string
          weaknesses: string | null
        }
        Insert: {
          created_at?: string
          cultural_fit_analysis?: string | null
          culture_match_score?: number | null
          demographic_analysis?: string | null
          demographic_match_score?: number | null
          education_match_score?: number | null
          experience_match_score?: number | null
          id?: string
          match_score: number
          matched_skills?: string[] | null
          missing_skills?: string[] | null
          overall_analysis?: string | null
          ranking: number
          recommendation?: string | null
          resume_id: string
          screening_session_id: string
          skill_match_score?: number | null
          strengths?: string | null
          updated_at?: string
          weaknesses?: string | null
        }
        Update: {
          created_at?: string
          cultural_fit_analysis?: string | null
          culture_match_score?: number | null
          demographic_analysis?: string | null
          demographic_match_score?: number | null
          education_match_score?: number | null
          experience_match_score?: number | null
          id?: string
          match_score?: number
          matched_skills?: string[] | null
          missing_skills?: string[] | null
          overall_analysis?: string | null
          ranking?: number
          recommendation?: string | null
          resume_id?: string
          screening_session_id?: string
          skill_match_score?: number | null
          strengths?: string | null
          updated_at?: string
          weaknesses?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cirs_resume_matches_resume_id_fkey"
            columns: ["resume_id"]
            isOneToOne: false
            referencedRelation: "cirs_resumes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cirs_resume_matches_screening_session_id_fkey"
            columns: ["screening_session_id"]
            isOneToOne: false
            referencedRelation: "cirs_screening_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      cirs_resumes: {
        Row: {
          candidate_email: string | null
          candidate_location: string | null
          candidate_name: string | null
          candidate_phone: string | null
          content_type: string
          created_at: string
          education: string | null
          experience_years: number | null
          file_path: string
          file_size: number
          filename: string
          id: string
          parsed_content: string | null
          skills: string[] | null
          updated_at: string
          user_id: string
        }
        Insert: {
          candidate_email?: string | null
          candidate_location?: string | null
          candidate_name?: string | null
          candidate_phone?: string | null
          content_type: string
          created_at?: string
          education?: string | null
          experience_years?: number | null
          file_path: string
          file_size: number
          filename: string
          id?: string
          parsed_content?: string | null
          skills?: string[] | null
          updated_at?: string
          user_id: string
        }
        Update: {
          candidate_email?: string | null
          candidate_location?: string | null
          candidate_name?: string | null
          candidate_phone?: string | null
          content_type?: string
          created_at?: string
          education?: string | null
          experience_years?: number | null
          file_path?: string
          file_size?: number
          filename?: string
          id?: string
          parsed_content?: string | null
          skills?: string[] | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      cirs_screening_sessions: {
        Row: {
          ai_model_used: string | null
          created_at: string
          id: string
          job_description_id: string
          processed_resumes: number | null
          processing_completed_at: string | null
          processing_started_at: string | null
          session_name: string
          status: string
          total_resumes: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          ai_model_used?: string | null
          created_at?: string
          id?: string
          job_description_id: string
          processed_resumes?: number | null
          processing_completed_at?: string | null
          processing_started_at?: string | null
          session_name: string
          status?: string
          total_resumes?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          ai_model_used?: string | null
          created_at?: string
          id?: string
          job_description_id?: string
          processed_resumes?: number | null
          processing_completed_at?: string | null
          processing_started_at?: string | null
          session_name?: string
          status?: string
          total_resumes?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "cirs_screening_sessions_job_description_id_fkey"
            columns: ["job_description_id"]
            isOneToOne: false
            referencedRelation: "cirs_job_descriptions"
            referencedColumns: ["id"]
          },
        ]
      }
      collection_items: {
        Row: {
          catalog_number: string | null
          condition_grade: string | null
          country: string
          created_at: string
          currency: string | null
          dealer_source: string | null
          denomination: string | null
          description: string | null
          id: string
          images: string[] | null
          item_type: string
          purchase_date: string | null
          purchase_price_inr: number | null
          purchase_price_usd: number | null
          tags: string[] | null
          title: string
          updated_at: string
          user_id: string
          year_issued: number | null
        }
        Insert: {
          catalog_number?: string | null
          condition_grade?: string | null
          country: string
          created_at?: string
          currency?: string | null
          dealer_source?: string | null
          denomination?: string | null
          description?: string | null
          id?: string
          images?: string[] | null
          item_type: string
          purchase_date?: string | null
          purchase_price_inr?: number | null
          purchase_price_usd?: number | null
          tags?: string[] | null
          title: string
          updated_at?: string
          user_id: string
          year_issued?: number | null
        }
        Update: {
          catalog_number?: string | null
          condition_grade?: string | null
          country?: string
          created_at?: string
          currency?: string | null
          dealer_source?: string | null
          denomination?: string | null
          description?: string | null
          id?: string
          images?: string[] | null
          item_type?: string
          purchase_date?: string | null
          purchase_price_inr?: number | null
          purchase_price_usd?: number | null
          tags?: string[] | null
          title?: string
          updated_at?: string
          user_id?: string
          year_issued?: number | null
        }
        Relationships: []
      }
      comments: {
        Row: {
          content: string
          created_at: string
          id: string
          post_id: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          post_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          post_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "comments_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "community_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      community_posts: {
        Row: {
          category: string
          comments_count: number | null
          content: string
          created_at: string
          id: string
          image_url: string | null
          likes_count: number | null
          title: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          category: string
          comments_count?: number | null
          content: string
          created_at?: string
          id?: string
          image_url?: string | null
          likes_count?: number | null
          title: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          category?: string
          comments_count?: number | null
          content?: string
          created_at?: string
          id?: string
          image_url?: string | null
          likes_count?: number | null
          title?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      company_research: {
        Row: {
          company_name: string
          created_at: string
          description: string | null
          employees: string | null
          founded: string | null
          headquarters: string | null
          id: string
          industry: string | null
          project_id: string
          research_data: Json | null
          revenue: string | null
          updated_at: string
        }
        Insert: {
          company_name: string
          created_at?: string
          description?: string | null
          employees?: string | null
          founded?: string | null
          headquarters?: string | null
          id?: string
          industry?: string | null
          project_id: string
          research_data?: Json | null
          revenue?: string | null
          updated_at?: string
        }
        Update: {
          company_name?: string
          created_at?: string
          description?: string | null
          employees?: string | null
          founded?: string | null
          headquarters?: string | null
          id?: string
          industry?: string | null
          project_id?: string
          research_data?: Json | null
          revenue?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "company_research_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      connectivity_tests: {
        Row: {
          created_at: string
          destination_host: string
          destination_port: number
          error_message: string | null
          id: string
          response_time_ms: number | null
          source_server: string | null
          status: string
          test_timestamp: string
          timeout_seconds: number | null
          user_id: string
        }
        Insert: {
          created_at?: string
          destination_host: string
          destination_port: number
          error_message?: string | null
          id?: string
          response_time_ms?: number | null
          source_server?: string | null
          status: string
          test_timestamp?: string
          timeout_seconds?: number | null
          user_id: string
        }
        Update: {
          created_at?: string
          destination_host?: string
          destination_port?: number
          error_message?: string | null
          id?: string
          response_time_ms?: number | null
          source_server?: string | null
          status?: string
          test_timestamp?: string
          timeout_seconds?: number | null
          user_id?: string
        }
        Relationships: []
      }
      controlled_documents: {
        Row: {
          application_id: string | null
          approver: string | null
          author: string
          checksum: string | null
          created_at: string | null
          document_number: string
          document_title: string
          document_type: string
          effective_date: string | null
          file_path: string | null
          id: string
          retirement_date: string | null
          review_date: string | null
          reviewer: string | null
          status: string
          updated_at: string | null
          version: string
        }
        Insert: {
          application_id?: string | null
          approver?: string | null
          author: string
          checksum?: string | null
          created_at?: string | null
          document_number: string
          document_title: string
          document_type: string
          effective_date?: string | null
          file_path?: string | null
          id?: string
          retirement_date?: string | null
          review_date?: string | null
          reviewer?: string | null
          status?: string
          updated_at?: string | null
          version?: string
        }
        Update: {
          application_id?: string | null
          approver?: string | null
          author?: string
          checksum?: string | null
          created_at?: string | null
          document_number?: string
          document_title?: string
          document_type?: string
          effective_date?: string | null
          file_path?: string | null
          id?: string
          retirement_date?: string | null
          review_date?: string | null
          reviewer?: string | null
          status?: string
          updated_at?: string | null
          version?: string
        }
        Relationships: []
      }
      controls: {
        Row: {
          application_used: string | null
          assertion: string | null
          control_description: string | null
          control_documentation_guidance: string | null
          control_frequency: string | null
          control_nature: string | null
          control_number: string
          control_owner: string | null
          control_title: string | null
          control_type: string | null
          controls_is: string | null
          created_at: string
          functional_team: string | null
          id: string
          process: string | null
          process_owner: string | null
          risk_description: string | null
          sub_process: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          application_used?: string | null
          assertion?: string | null
          control_description?: string | null
          control_documentation_guidance?: string | null
          control_frequency?: string | null
          control_nature?: string | null
          control_number: string
          control_owner?: string | null
          control_title?: string | null
          control_type?: string | null
          controls_is?: string | null
          created_at?: string
          functional_team?: string | null
          id?: string
          process?: string | null
          process_owner?: string | null
          risk_description?: string | null
          sub_process?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          application_used?: string | null
          assertion?: string | null
          control_description?: string | null
          control_documentation_guidance?: string | null
          control_frequency?: string | null
          control_nature?: string | null
          control_number?: string
          control_owner?: string | null
          control_title?: string | null
          control_type?: string | null
          controls_is?: string | null
          created_at?: string
          functional_team?: string | null
          id?: string
          process?: string | null
          process_owner?: string | null
          risk_description?: string | null
          sub_process?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      conversation_metrics: {
        Row: {
          agent_id: string | null
          agent_performance_score: number | null
          back_and_forth_count: number | null
          channel: string
          conversation_id: string | null
          created_at: string
          customer_satisfaction_score: number | null
          email_id: string | null
          escalation_count: number | null
          first_response_time: unknown | null
          id: string
          message_count: number | null
          resolution_on_first_contact: boolean | null
          resolution_time: unknown | null
          total_interaction_time: unknown | null
          updated_at: string
        }
        Insert: {
          agent_id?: string | null
          agent_performance_score?: number | null
          back_and_forth_count?: number | null
          channel: string
          conversation_id?: string | null
          created_at?: string
          customer_satisfaction_score?: number | null
          email_id?: string | null
          escalation_count?: number | null
          first_response_time?: unknown | null
          id?: string
          message_count?: number | null
          resolution_on_first_contact?: boolean | null
          resolution_time?: unknown | null
          total_interaction_time?: unknown | null
          updated_at?: string
        }
        Update: {
          agent_id?: string | null
          agent_performance_score?: number | null
          back_and_forth_count?: number | null
          channel?: string
          conversation_id?: string | null
          created_at?: string
          customer_satisfaction_score?: number | null
          email_id?: string | null
          escalation_count?: number | null
          first_response_time?: unknown | null
          id?: string
          message_count?: number | null
          resolution_on_first_contact?: boolean | null
          resolution_time?: unknown | null
          total_interaction_time?: unknown | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "conversation_metrics_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agent_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "conversation_metrics_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "conversation_uploads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "conversation_metrics_email_id_fkey"
            columns: ["email_id"]
            isOneToOne: false
            referencedRelation: "email_analysis"
            referencedColumns: ["id"]
          },
        ]
      }
      conversation_uploads: {
        Row: {
          agent_feedback: string | null
          agent_rating: number | null
          analysis_results: Json | null
          analysis_status: string
          category: string | null
          coaching_tips: string[] | null
          conversation_status: string | null
          created_at: string
          customer_emotion: string | null
          emotion: string | null
          file_name: string
          file_path: string | null
          file_size: number
          file_type: string
          id: string
          intent: string | null
          key_moments: Json | null
          original_content: string | null
          priority_score: number | null
          resolution_time: unknown | null
          satisfaction_score: number | null
          sentiment: string | null
          subcategory: string | null
          summary: string | null
          updated_at: string
          upload_date: string
          urgency_level: string | null
          user_id: string | null
        }
        Insert: {
          agent_feedback?: string | null
          agent_rating?: number | null
          analysis_results?: Json | null
          analysis_status?: string
          category?: string | null
          coaching_tips?: string[] | null
          conversation_status?: string | null
          created_at?: string
          customer_emotion?: string | null
          emotion?: string | null
          file_name: string
          file_path?: string | null
          file_size: number
          file_type?: string
          id?: string
          intent?: string | null
          key_moments?: Json | null
          original_content?: string | null
          priority_score?: number | null
          resolution_time?: unknown | null
          satisfaction_score?: number | null
          sentiment?: string | null
          subcategory?: string | null
          summary?: string | null
          updated_at?: string
          upload_date?: string
          urgency_level?: string | null
          user_id?: string | null
        }
        Update: {
          agent_feedback?: string | null
          agent_rating?: number | null
          analysis_results?: Json | null
          analysis_status?: string
          category?: string | null
          coaching_tips?: string[] | null
          conversation_status?: string | null
          created_at?: string
          customer_emotion?: string | null
          emotion?: string | null
          file_name?: string
          file_path?: string | null
          file_size?: number
          file_type?: string
          id?: string
          intent?: string | null
          key_moments?: Json | null
          original_content?: string | null
          priority_score?: number | null
          resolution_time?: unknown | null
          satisfaction_score?: number | null
          sentiment?: string | null
          subcategory?: string | null
          summary?: string | null
          updated_at?: string
          upload_date?: string
          urgency_level?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      crawled_documents: {
        Row: {
          content: string | null
          crawled_at: string
          created_at: string
          id: string
          metadata: Json | null
          title: string | null
          updated_at: string
          url: string
        }
        Insert: {
          content?: string | null
          crawled_at?: string
          created_at?: string
          id?: string
          metadata?: Json | null
          title?: string | null
          updated_at?: string
          url: string
        }
        Update: {
          content?: string | null
          crawled_at?: string
          created_at?: string
          id?: string
          metadata?: Json | null
          title?: string | null
          updated_at?: string
          url?: string
        }
        Relationships: []
      }
      credit_cards: {
        Row: {
          apr: number | null
          available_credit: number | null
          bank_name: string
          card_name: string
          card_type: string
          created_at: string
          credit_limit: number | null
          currency: string | null
          current_balance: number | null
          id: string
          is_active: boolean | null
          last_four_digits: string
          minimum_payment: number | null
          payment_due_date: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          apr?: number | null
          available_credit?: number | null
          bank_name: string
          card_name: string
          card_type: string
          created_at?: string
          credit_limit?: number | null
          currency?: string | null
          current_balance?: number | null
          id?: string
          is_active?: boolean | null
          last_four_digits: string
          minimum_payment?: number | null
          payment_due_date?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          apr?: number | null
          available_credit?: number | null
          bank_name?: string
          card_name?: string
          card_type?: string
          created_at?: string
          credit_limit?: number | null
          currency?: string | null
          current_balance?: number | null
          id?: string
          is_active?: boolean | null
          last_four_digits?: string
          minimum_payment?: number | null
          payment_due_date?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      dashboard_stats: {
        Row: {
          active_agents: number | null
          avg_response_time_today: unknown | null
          avg_satisfaction_today: number | null
          call_count_today: number | null
          chat_count_today: number | null
          email_count_today: number | null
          high_priority_count: number | null
          id: string
          last_updated: string
          overloaded_agents: number | null
          pending_conversations: number | null
          resolved_conversations_today: number | null
          sla_breaches_today: number | null
          stats_date: string
          total_conversations_today: number | null
          user_id: string | null
        }
        Insert: {
          active_agents?: number | null
          avg_response_time_today?: unknown | null
          avg_satisfaction_today?: number | null
          call_count_today?: number | null
          chat_count_today?: number | null
          email_count_today?: number | null
          high_priority_count?: number | null
          id?: string
          last_updated?: string
          overloaded_agents?: number | null
          pending_conversations?: number | null
          resolved_conversations_today?: number | null
          sla_breaches_today?: number | null
          stats_date?: string
          total_conversations_today?: number | null
          user_id?: string | null
        }
        Update: {
          active_agents?: number | null
          avg_response_time_today?: unknown | null
          avg_satisfaction_today?: number | null
          call_count_today?: number | null
          chat_count_today?: number | null
          email_count_today?: number | null
          high_priority_count?: number | null
          id?: string
          last_updated?: string
          overloaded_agents?: number | null
          pending_conversations?: number | null
          resolved_conversations_today?: number | null
          sla_breaches_today?: number | null
          stats_date?: string
          total_conversations_today?: number | null
          user_id?: string | null
        }
        Relationships: []
      }
      dashboards: {
        Row: {
          config: Json
          created_at: string
          data_source_id: string | null
          description: string | null
          id: string
          is_public: boolean | null
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          config?: Json
          created_at?: string
          data_source_id?: string | null
          description?: string | null
          id?: string
          is_public?: boolean | null
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          config?: Json
          created_at?: string
          data_source_id?: string | null
          description?: string | null
          id?: string
          is_public?: boolean | null
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      data_collection_logs: {
        Row: {
          collected_at: string
          collection_purpose: string
          consent_given: boolean
          consent_required: boolean
          created_at: string
          data_category: string
          data_type: string
          id: string
          metadata: Json | null
          retention_period: unknown | null
          user_id: string
        }
        Insert: {
          collected_at?: string
          collection_purpose: string
          consent_given?: boolean
          consent_required?: boolean
          created_at?: string
          data_category: string
          data_type: string
          id?: string
          metadata?: Json | null
          retention_period?: unknown | null
          user_id: string
        }
        Update: {
          collected_at?: string
          collection_purpose?: string
          consent_given?: boolean
          consent_required?: boolean
          created_at?: string
          data_category?: string
          data_type?: string
          id?: string
          metadata?: Json | null
          retention_period?: unknown | null
          user_id?: string
        }
        Relationships: []
      }
      data_requests: {
        Row: {
          category_id: string | null
          created_at: string
          date_sent: string | null
          days_left: number | null
          due_date: string | null
          functional_poc: string | null
          id: string
          request_received: string | null
          status: string | null
          support_required: string | null
          test_step_id: string | null
          updated_at: string
          user_id: string
          validation_statement: string
        }
        Insert: {
          category_id?: string | null
          created_at?: string
          date_sent?: string | null
          days_left?: number | null
          due_date?: string | null
          functional_poc?: string | null
          id?: string
          request_received?: string | null
          status?: string | null
          support_required?: string | null
          test_step_id?: string | null
          updated_at?: string
          user_id: string
          validation_statement: string
        }
        Update: {
          category_id?: string | null
          created_at?: string
          date_sent?: string | null
          days_left?: number | null
          due_date?: string | null
          functional_poc?: string | null
          id?: string
          request_received?: string | null
          status?: string | null
          support_required?: string | null
          test_step_id?: string | null
          updated_at?: string
          user_id?: string
          validation_statement?: string
        }
        Relationships: [
          {
            foreignKeyName: "data_requests_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      data_uploads: {
        Row: {
          created_at: string
          file_name: string
          file_size: number
          file_type: string
          id: string
          metadata: Json | null
          processed_data: Json | null
          status: string | null
          storage_path: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          file_name: string
          file_size: number
          file_type: string
          id?: string
          metadata?: Json | null
          processed_data?: Json | null
          status?: string | null
          storage_path: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          file_name?: string
          file_size?: number
          file_type?: string
          id?: string
          metadata?: Json | null
          processed_data?: Json | null
          status?: string | null
          storage_path?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      defects: {
        Row: {
          assignee: string
          created_at: string | null
          description: string | null
          fixed_in: string | null
          found_in: string | null
          id: string
          priority: string
          project_id: string | null
          reporter: string
          severity: string
          status: string
          story_id: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          assignee: string
          created_at?: string | null
          description?: string | null
          fixed_in?: string | null
          found_in?: string | null
          id?: string
          priority?: string
          project_id?: string | null
          reporter: string
          severity?: string
          status?: string
          story_id?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          assignee?: string
          created_at?: string | null
          description?: string | null
          fixed_in?: string | null
          found_in?: string | null
          id?: string
          priority?: string
          project_id?: string | null
          reporter?: string
          severity?: string
          status?: string
          story_id?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "defects_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "defects_story_id_fkey"
            columns: ["story_id"]
            isOneToOne: false
            referencedRelation: "stories"
            referencedColumns: ["id"]
          },
        ]
      }
      delivery_assessments: {
        Row: {
          assessment_date: string
          assessor_id: string | null
          created_at: string
          customer_service_score: number | null
          delivery_profile_id: string
          id: string
          notes: string | null
          overall_rating: Database["public"]["Enums"]["delivery_rating"] | null
          package_handling_score: number | null
          punctuality_score: number | null
          status: Database["public"]["Enums"]["delivery_status"] | null
          updated_at: string
        }
        Insert: {
          assessment_date?: string
          assessor_id?: string | null
          created_at?: string
          customer_service_score?: number | null
          delivery_profile_id: string
          id?: string
          notes?: string | null
          overall_rating?: Database["public"]["Enums"]["delivery_rating"] | null
          package_handling_score?: number | null
          punctuality_score?: number | null
          status?: Database["public"]["Enums"]["delivery_status"] | null
          updated_at?: string
        }
        Update: {
          assessment_date?: string
          assessor_id?: string | null
          created_at?: string
          customer_service_score?: number | null
          delivery_profile_id?: string
          id?: string
          notes?: string | null
          overall_rating?: Database["public"]["Enums"]["delivery_rating"] | null
          package_handling_score?: number | null
          punctuality_score?: number | null
          status?: Database["public"]["Enums"]["delivery_status"] | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "delivery_assessments_delivery_profile_id_fkey"
            columns: ["delivery_profile_id"]
            isOneToOne: false
            referencedRelation: "delivery_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      delivery_profiles: {
        Row: {
          address: string | null
          created_at: string
          delivery_zone: string | null
          email: string
          full_name: string
          id: string
          is_active: boolean | null
          license_number: string | null
          phone: string | null
          updated_at: string
          user_id: string
          vehicle_type: string | null
        }
        Insert: {
          address?: string | null
          created_at?: string
          delivery_zone?: string | null
          email: string
          full_name: string
          id?: string
          is_active?: boolean | null
          license_number?: string | null
          phone?: string | null
          updated_at?: string
          user_id: string
          vehicle_type?: string | null
        }
        Update: {
          address?: string | null
          created_at?: string
          delivery_zone?: string | null
          email?: string
          full_name?: string
          id?: string
          is_active?: boolean | null
          license_number?: string | null
          phone?: string | null
          updated_at?: string
          user_id?: string
          vehicle_type?: string | null
        }
        Relationships: []
      }
      delivery_reviews: {
        Row: {
          created_at: string
          customer_email: string | null
          customer_name: string
          delivery_date: string | null
          delivery_profile_id: string
          id: string
          order_id: string | null
          rating: number | null
          review_text: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          customer_email?: string | null
          customer_name: string
          delivery_date?: string | null
          delivery_profile_id: string
          id?: string
          order_id?: string | null
          rating?: number | null
          review_text?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          customer_email?: string | null
          customer_name?: string
          delivery_date?: string | null
          delivery_profile_id?: string
          id?: string
          order_id?: string | null
          rating?: number | null
          review_text?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "delivery_reviews_delivery_profile_id_fkey"
            columns: ["delivery_profile_id"]
            isOneToOne: false
            referencedRelation: "delivery_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      delivery_zones: {
        Row: {
          created_at: string
          delivery_fee: number
          estimated_delivery_time: string
          id: string
          is_active: boolean
          minimum_order: number
          postal_codes: string[]
          store_id: string
          updated_at: string
          zone_name: string
        }
        Insert: {
          created_at?: string
          delivery_fee?: number
          estimated_delivery_time?: string
          id?: string
          is_active?: boolean
          minimum_order?: number
          postal_codes: string[]
          store_id: string
          updated_at?: string
          zone_name: string
        }
        Update: {
          created_at?: string
          delivery_fee?: number
          estimated_delivery_time?: string
          id?: string
          is_active?: boolean
          minimum_order?: number
          postal_codes?: string[]
          store_id?: string
          updated_at?: string
          zone_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "delivery_zones_store_id_fkey"
            columns: ["store_id"]
            isOneToOne: false
            referencedRelation: "stores"
            referencedColumns: ["id"]
          },
        ]
      }
      deployments: {
        Row: {
          created_at: string | null
          deploy_notes: string | null
          deployed_at: string | null
          deployed_by: string | null
          environment: string
          id: string
          project_id: string | null
          status: string
          updated_at: string | null
          version: string
        }
        Insert: {
          created_at?: string | null
          deploy_notes?: string | null
          deployed_at?: string | null
          deployed_by?: string | null
          environment: string
          id?: string
          project_id?: string | null
          status?: string
          updated_at?: string | null
          version: string
        }
        Update: {
          created_at?: string | null
          deploy_notes?: string | null
          deployed_at?: string | null
          deployed_by?: string | null
          environment?: string
          id?: string
          project_id?: string | null
          status?: string
          updated_at?: string | null
          version?: string
        }
        Relationships: [
          {
            foreignKeyName: "deployments_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      dgd_data: {
        Row: {
          created_at: string
          current_status: string | null
          file_upload_id: string | null
          id: string
          key_challenges: string | null
          next_steps: string | null
          project_id: string
          raw_data: Json | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          current_status?: string | null
          file_upload_id?: string | null
          id?: string
          key_challenges?: string | null
          next_steps?: string | null
          project_id: string
          raw_data?: Json | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          current_status?: string | null
          file_upload_id?: string | null
          id?: string
          key_challenges?: string | null
          next_steps?: string | null
          project_id?: string
          raw_data?: Json | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "dgd_data_file_upload_id_fkey"
            columns: ["file_upload_id"]
            isOneToOne: false
            referencedRelation: "pcsat_file_uploads"
            referencedColumns: ["id"]
          },
        ]
      }
      document_reviewers: {
        Row: {
          created_at: string | null
          department: string | null
          email: string
          id: string
          is_active: boolean | null
          name: string
          reviewer_type: Database["public"]["Enums"]["reviewer_type"]
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          department?: string | null
          email: string
          id?: string
          is_active?: boolean | null
          name: string
          reviewer_type: Database["public"]["Enums"]["reviewer_type"]
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          department?: string | null
          email?: string
          id?: string
          is_active?: boolean | null
          name?: string
          reviewer_type?: Database["public"]["Enums"]["reviewer_type"]
          updated_at?: string | null
        }
        Relationships: []
      }
      documents: {
        Row: {
          confidence: number | null
          created_at: string
          extracted_text: string | null
          file_name: string
          file_path: string
          file_size: number
          id: string
          updated_at: string
          user_id: string
          validation_score: number | null
        }
        Insert: {
          confidence?: number | null
          created_at?: string
          extracted_text?: string | null
          file_name: string
          file_path: string
          file_size: number
          id?: string
          updated_at?: string
          user_id: string
          validation_score?: number | null
        }
        Update: {
          confidence?: number | null
          created_at?: string
          extracted_text?: string | null
          file_name?: string
          file_path?: string
          file_size?: number
          id?: string
          updated_at?: string
          user_id?: string
          validation_score?: number | null
        }
        Relationships: []
      }
      domains: {
        Row: {
          created_at: string
          domain: string
          expiry_date: string
          id: string
          issuer: string
          last_renewed: string | null
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          domain: string
          expiry_date: string
          id?: string
          issuer?: string
          last_renewed?: string | null
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          domain?: string
          expiry_date?: string
          id?: string
          issuer?: string
          last_renewed?: string | null
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      dry_fruits_products: {
        Row: {
          category_id: string | null
          created_at: string
          description: string | null
          discount_percentage: number | null
          health_benefits: string[] | null
          id: string
          image_url: string | null
          images: string[] | null
          is_available: boolean | null
          is_featured: boolean | null
          name: string
          nutritional_info: Json | null
          origin_country: string | null
          original_price: number | null
          price: number
          rating: number | null
          review_count: number | null
          shelf_life: string | null
          stock_quantity: number | null
          storage_instructions: string | null
          tags: string[] | null
          updated_at: string
          weight_options: Json | null
        }
        Insert: {
          category_id?: string | null
          created_at?: string
          description?: string | null
          discount_percentage?: number | null
          health_benefits?: string[] | null
          id?: string
          image_url?: string | null
          images?: string[] | null
          is_available?: boolean | null
          is_featured?: boolean | null
          name: string
          nutritional_info?: Json | null
          origin_country?: string | null
          original_price?: number | null
          price: number
          rating?: number | null
          review_count?: number | null
          shelf_life?: string | null
          stock_quantity?: number | null
          storage_instructions?: string | null
          tags?: string[] | null
          updated_at?: string
          weight_options?: Json | null
        }
        Update: {
          category_id?: string | null
          created_at?: string
          description?: string | null
          discount_percentage?: number | null
          health_benefits?: string[] | null
          id?: string
          image_url?: string | null
          images?: string[] | null
          is_available?: boolean | null
          is_featured?: boolean | null
          name?: string
          nutritional_info?: Json | null
          origin_country?: string | null
          original_price?: number | null
          price?: number
          rating?: number | null
          review_count?: number | null
          shelf_life?: string | null
          stock_quantity?: number | null
          storage_instructions?: string | null
          tags?: string[] | null
          updated_at?: string
          weight_options?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "dry_fruits_products_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      electronic_signatures: {
        Row: {
          application_id: string | null
          created_at: string | null
          document_id: string
          document_type: string
          id: string
          ip_address: string | null
          signature_date: string | null
          signature_hash: string
          signature_meaning: string
          signer_name: string
          signer_role: string
          user_agent: string | null
        }
        Insert: {
          application_id?: string | null
          created_at?: string | null
          document_id: string
          document_type: string
          id?: string
          ip_address?: string | null
          signature_date?: string | null
          signature_hash: string
          signature_meaning: string
          signer_name: string
          signer_role: string
          user_agent?: string | null
        }
        Update: {
          application_id?: string | null
          created_at?: string | null
          document_id?: string
          document_type?: string
          id?: string
          ip_address?: string | null
          signature_date?: string | null
          signature_hash?: string
          signature_meaning?: string
          signer_name?: string
          signer_role?: string
          user_agent?: string | null
        }
        Relationships: []
      }
      email_alerts: {
        Row: {
          alert_type: string
          created_at: string
          error_details: Json | null
          id: string
          recipient_email: string
          resolved: boolean | null
          resolved_at: string | null
          severity: string
          subject: string | null
          updated_at: string
        }
        Insert: {
          alert_type: string
          created_at?: string
          error_details?: Json | null
          id?: string
          recipient_email: string
          resolved?: boolean | null
          resolved_at?: string | null
          severity?: string
          subject?: string | null
          updated_at?: string
        }
        Update: {
          alert_type?: string
          created_at?: string
          error_details?: Json | null
          id?: string
          recipient_email?: string
          resolved?: boolean | null
          resolved_at?: string | null
          severity?: string
          subject?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      email_analysis: {
        Row: {
          analysis_results: Json | null
          analysis_status: string
          assigned_agent_id: string | null
          assigned_at: string | null
          assignment_reason: string | null
          category: string
          created_at: string
          department: string | null
          email_content: string
          email_subject: string
          emotion: string | null
          estimated_resolution_time: unknown | null
          extracted_entities: Json | null
          id: string
          intent: string | null
          key_phrases: string[] | null
          priority_score: number
          received_at: string
          required_skills: string[] | null
          sender_email: string
          sentiment: string
          status: string
          subcategory: string | null
          updated_at: string
          urgency_level: string
          user_id: string | null
        }
        Insert: {
          analysis_results?: Json | null
          analysis_status?: string
          assigned_agent_id?: string | null
          assigned_at?: string | null
          assignment_reason?: string | null
          category?: string
          created_at?: string
          department?: string | null
          email_content: string
          email_subject: string
          emotion?: string | null
          estimated_resolution_time?: unknown | null
          extracted_entities?: Json | null
          id?: string
          intent?: string | null
          key_phrases?: string[] | null
          priority_score?: number
          received_at?: string
          required_skills?: string[] | null
          sender_email: string
          sentiment?: string
          status?: string
          subcategory?: string | null
          updated_at?: string
          urgency_level?: string
          user_id?: string | null
        }
        Update: {
          analysis_results?: Json | null
          analysis_status?: string
          assigned_agent_id?: string | null
          assigned_at?: string | null
          assignment_reason?: string | null
          category?: string
          created_at?: string
          department?: string | null
          email_content?: string
          email_subject?: string
          emotion?: string | null
          estimated_resolution_time?: unknown | null
          extracted_entities?: Json | null
          id?: string
          intent?: string | null
          key_phrases?: string[] | null
          priority_score?: number
          received_at?: string
          required_skills?: string[] | null
          sender_email?: string
          sentiment?: string
          status?: string
          subcategory?: string | null
          updated_at?: string
          urgency_level?: string
          user_id?: string | null
        }
        Relationships: []
      }
      email_events: {
        Row: {
          created_at: string
          email_id: string
          error_message: string | null
          event_type: string
          id: string
          metadata: Json | null
          occurred_at: string
          recipient_email: string
          status: string
          subject: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          email_id: string
          error_message?: string | null
          event_type: string
          id?: string
          metadata?: Json | null
          occurred_at: string
          recipient_email: string
          status: string
          subject?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          email_id?: string
          error_message?: string | null
          event_type?: string
          id?: string
          metadata?: Json | null
          occurred_at?: string
          recipient_email?: string
          status?: string
          subject?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      email_subscribers: {
        Row: {
          created_at: string
          email: string
          id: string
          subscribed: boolean
          subscription_source: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          subscribed?: boolean
          subscription_source?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          subscribed?: boolean
          subscription_source?: string
          updated_at?: string
        }
        Relationships: []
      }
      emergency_reports: {
        Row: {
          contact_email: string | null
          contact_name: string
          contact_phone: string
          created_at: string
          description: string
          emergency_type: string
          id: string
          location: string | null
          pet_description: string | null
          pet_name: string | null
          status: string | null
          updated_at: string
          urgency: string | null
          user_id: string | null
        }
        Insert: {
          contact_email?: string | null
          contact_name: string
          contact_phone: string
          created_at?: string
          description: string
          emergency_type: string
          id?: string
          location?: string | null
          pet_description?: string | null
          pet_name?: string | null
          status?: string | null
          updated_at?: string
          urgency?: string | null
          user_id?: string | null
        }
        Update: {
          contact_email?: string | null
          contact_name?: string
          contact_phone?: string
          created_at?: string
          description?: string
          emergency_type?: string
          id?: string
          location?: string | null
          pet_description?: string | null
          pet_name?: string | null
          status?: string | null
          updated_at?: string
          urgency?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      employees: {
        Row: {
          created_at: string
          department: string | null
          employee_email: string
          employee_id: string
          employee_name: string
          id: string
          location: string | null
          manager_name: string | null
          project_id: string | null
          project_name: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          department?: string | null
          employee_email: string
          employee_id: string
          employee_name: string
          id?: string
          location?: string | null
          manager_name?: string | null
          project_id?: string | null
          project_name?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          department?: string | null
          employee_email?: string
          employee_id?: string
          employee_name?: string
          id?: string
          location?: string | null
          manager_name?: string | null
          project_id?: string | null
          project_name?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      error_categories: {
        Row: {
          color: string | null
          created_at: string
          description: string | null
          id: string
          is_active: boolean | null
          name: string
        }
        Insert: {
          color?: string | null
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean | null
          name: string
        }
        Update: {
          color?: string | null
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
        }
        Relationships: []
      }
      error_logs: {
        Row: {
          component: string | null
          created_at: string
          error_code: string | null
          error_message: string
          error_type: string
          file_path: string | null
          id: string
          line_number: number | null
          metadata: Json | null
          resolution_notes: string | null
          resolved: boolean | null
          resolved_at: string | null
          resolved_by: string | null
          severity: string
          stack_trace: string | null
          updated_at: string
          url: string | null
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          component?: string | null
          created_at?: string
          error_code?: string | null
          error_message: string
          error_type: string
          file_path?: string | null
          id?: string
          line_number?: number | null
          metadata?: Json | null
          resolution_notes?: string | null
          resolved?: boolean | null
          resolved_at?: string | null
          resolved_by?: string | null
          severity?: string
          stack_trace?: string | null
          updated_at?: string
          url?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          component?: string | null
          created_at?: string
          error_code?: string | null
          error_message?: string
          error_type?: string
          file_path?: string | null
          id?: string
          line_number?: number | null
          metadata?: Json | null
          resolution_notes?: string | null
          resolved?: boolean | null
          resolved_at?: string | null
          resolved_by?: string | null
          severity?: string
          stack_trace?: string | null
          updated_at?: string
          url?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      ev_bookings: {
        Row: {
          actual_kwh: number | null
          created_at: string | null
          driver_id: string | null
          end_time: string
          estimated_kwh: number | null
          id: string
          owner_id: string | null
          payment_status: string | null
          property_id: string | null
          special_instructions: string | null
          start_time: string
          status: string | null
          tariff_id: string | null
          total_cost: number | null
          updated_at: string | null
        }
        Insert: {
          actual_kwh?: number | null
          created_at?: string | null
          driver_id?: string | null
          end_time: string
          estimated_kwh?: number | null
          id?: string
          owner_id?: string | null
          payment_status?: string | null
          property_id?: string | null
          special_instructions?: string | null
          start_time: string
          status?: string | null
          tariff_id?: string | null
          total_cost?: number | null
          updated_at?: string | null
        }
        Update: {
          actual_kwh?: number | null
          created_at?: string | null
          driver_id?: string | null
          end_time?: string
          estimated_kwh?: number | null
          id?: string
          owner_id?: string | null
          payment_status?: string | null
          property_id?: string | null
          special_instructions?: string | null
          start_time?: string
          status?: string | null
          tariff_id?: string | null
          total_cost?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ev_bookings_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "charging_properties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ev_bookings_tariff_id_fkey"
            columns: ["tariff_id"]
            isOneToOne: false
            referencedRelation: "tariffs"
            referencedColumns: ["id"]
          },
        ]
      }
      ev_reviews: {
        Row: {
          booking_id: string | null
          comment: string | null
          created_at: string | null
          id: string
          rating: number | null
          review_type: string | null
          reviewee_id: string | null
          reviewer_id: string | null
        }
        Insert: {
          booking_id?: string | null
          comment?: string | null
          created_at?: string | null
          id?: string
          rating?: number | null
          review_type?: string | null
          reviewee_id?: string | null
          reviewer_id?: string | null
        }
        Update: {
          booking_id?: string | null
          comment?: string | null
          created_at?: string | null
          id?: string
          rating?: number | null
          review_type?: string | null
          reviewee_id?: string | null
          reviewer_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ev_reviews_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "ev_bookings"
            referencedColumns: ["id"]
          },
        ]
      }
      event_rsvps: {
        Row: {
          attending: boolean
          created_at: string
          event_id: string
          id: string
          user_id: string
        }
        Insert: {
          attending: boolean
          created_at?: string
          event_id: string
          id?: string
          user_id: string
        }
        Update: {
          attending?: boolean
          created_at?: string
          event_id?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "event_rsvps_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      events: {
        Row: {
          attendee_count: number
          created_at: string
          created_by: string | null
          date: string
          description: string | null
          id: string
          image_url: string | null
          location: string
          time: string
          title: string
          updated_at: string
        }
        Insert: {
          attendee_count?: number
          created_at?: string
          created_by?: string | null
          date: string
          description?: string | null
          id?: string
          image_url?: string | null
          location: string
          time: string
          title: string
          updated_at?: string
        }
        Update: {
          attendee_count?: number
          created_at?: string
          created_by?: string | null
          date?: string
          description?: string | null
          id?: string
          image_url?: string | null
          location?: string
          time?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      family_members: {
        Row: {
          created_at: string
          date_of_birth: string | null
          email: string | null
          first_name: string
          gender: string | null
          id: string
          last_name: string
          medical_notes: string | null
          phone: string | null
          relationship: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          date_of_birth?: string | null
          email?: string | null
          first_name: string
          gender?: string | null
          id?: string
          last_name: string
          medical_notes?: string | null
          phone?: string | null
          relationship: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          date_of_birth?: string | null
          email?: string | null
          first_name?: string
          gender?: string | null
          id?: string
          last_name?: string
          medical_notes?: string | null
          phone?: string | null
          relationship?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      file_records: {
        Row: {
          cell_value: string | null
          column_name: string | null
          created_at: string
          id: string
          metadata: Json | null
          record_type: string
          row_number: number | null
          source_file_name: string
          source_file_type: string
          updated_at: string
          user_id: string
        }
        Insert: {
          cell_value?: string | null
          column_name?: string | null
          created_at?: string
          id?: string
          metadata?: Json | null
          record_type: string
          row_number?: number | null
          source_file_name: string
          source_file_type: string
          updated_at?: string
          user_id: string
        }
        Update: {
          cell_value?: string | null
          column_name?: string | null
          created_at?: string
          id?: string
          metadata?: Json | null
          record_type?: string
          row_number?: number | null
          source_file_name?: string
          source_file_type?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      file_uploads: {
        Row: {
          created_at: string
          error_message: string | null
          file_name: string
          file_size: number
          file_type: string
          id: string
          processed_records: number | null
          status: string
          storage_path: string
          total_records: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          error_message?: string | null
          file_name: string
          file_size: number
          file_type: string
          id?: string
          processed_records?: number | null
          status?: string
          storage_path: string
          total_records?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          error_message?: string | null
          file_name?: string
          file_size?: number
          file_type?: string
          id?: string
          processed_records?: number | null
          status?: string
          storage_path?: string
          total_records?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      fixtures: {
        Row: {
          away_score: number | null
          away_team_id: string
          competition: string | null
          created_at: string
          created_by: string | null
          fixture_date: string
          home_score: number | null
          home_team_id: string
          id: string
          notes: string | null
          referee: string | null
          season: string | null
          status: Database["public"]["Enums"]["fixture_status"] | null
          updated_at: string
          venue: string
        }
        Insert: {
          away_score?: number | null
          away_team_id: string
          competition?: string | null
          created_at?: string
          created_by?: string | null
          fixture_date: string
          home_score?: number | null
          home_team_id: string
          id?: string
          notes?: string | null
          referee?: string | null
          season?: string | null
          status?: Database["public"]["Enums"]["fixture_status"] | null
          updated_at?: string
          venue: string
        }
        Update: {
          away_score?: number | null
          away_team_id?: string
          competition?: string | null
          created_at?: string
          created_by?: string | null
          fixture_date?: string
          home_score?: number | null
          home_team_id?: string
          id?: string
          notes?: string | null
          referee?: string | null
          season?: string | null
          status?: Database["public"]["Enums"]["fixture_status"] | null
          updated_at?: string
          venue?: string
        }
        Relationships: [
          {
            foreignKeyName: "fixtures_away_team_id_fkey"
            columns: ["away_team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fixtures_home_team_id_fkey"
            columns: ["home_team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      grocery_items: {
        Row: {
          category: string
          created_at: string
          description: string | null
          id: string
          image_url: string | null
          in_stock: boolean | null
          low_stock_threshold: number | null
          name: string
          original_price: number | null
          price: number
          rating: number | null
          review_count: number | null
          sku: string | null
          stock_quantity: number | null
          store_id: string | null
          updated_at: string
        }
        Insert: {
          category: string
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          in_stock?: boolean | null
          low_stock_threshold?: number | null
          name: string
          original_price?: number | null
          price: number
          rating?: number | null
          review_count?: number | null
          sku?: string | null
          stock_quantity?: number | null
          store_id?: string | null
          updated_at?: string
        }
        Update: {
          category?: string
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          in_stock?: boolean | null
          low_stock_threshold?: number | null
          name?: string
          original_price?: number | null
          price?: number
          rating?: number | null
          review_count?: number | null
          sku?: string | null
          stock_quantity?: number | null
          store_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "grocery_items_store_id_fkey"
            columns: ["store_id"]
            isOneToOne: false
            referencedRelation: "stores"
            referencedColumns: ["id"]
          },
        ]
      }
      gvc_schedules: {
        Row: {
          created_at: string
          driver_id: string
          id: string
          meeting_link: string | null
          notes: string | null
          preferred_time: string
          scheduled_by: string
          scheduled_date: string
          status: string
          ticket_id: string
        }
        Insert: {
          created_at?: string
          driver_id: string
          id?: string
          meeting_link?: string | null
          notes?: string | null
          preferred_time: string
          scheduled_by: string
          scheduled_date: string
          status?: string
          ticket_id: string
        }
        Update: {
          created_at?: string
          driver_id?: string
          id?: string
          meeting_link?: string | null
          notes?: string | null
          preferred_time?: string
          scheduled_by?: string
          scheduled_date?: string
          status?: string
          ticket_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "gvc_schedules_driver_id_fkey"
            columns: ["driver_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "gvc_schedules_scheduled_by_fkey"
            columns: ["scheduled_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "gvc_schedules_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "tickets"
            referencedColumns: ["id"]
          },
        ]
      }
      gxp_compliance: {
        Row: {
          application_id: string
          assessment_date: string | null
          compliance_score: number | null
          compliance_status: string
          created_at: string | null
          findings: string | null
          id: string
          next_review_date: string | null
          regulation_type: string
          remediation_plan: string | null
          updated_at: string | null
          validated_by: string | null
          validation_date: string | null
        }
        Insert: {
          application_id: string
          assessment_date?: string | null
          compliance_score?: number | null
          compliance_status?: string
          created_at?: string | null
          findings?: string | null
          id?: string
          next_review_date?: string | null
          regulation_type: string
          remediation_plan?: string | null
          updated_at?: string | null
          validated_by?: string | null
          validation_date?: string | null
        }
        Update: {
          application_id?: string
          assessment_date?: string | null
          compliance_score?: number | null
          compliance_status?: string
          created_at?: string | null
          findings?: string | null
          id?: string
          next_review_date?: string | null
          regulation_type?: string
          remediation_plan?: string | null
          updated_at?: string | null
          validated_by?: string | null
          validation_date?: string | null
        }
        Relationships: []
      }
      habit_entries: {
        Row: {
          created_at: string
          date: string
          habit_id: string
          id: string
          updated_at: string
          user_id: string
          value: Json
        }
        Insert: {
          created_at?: string
          date: string
          habit_id: string
          id?: string
          updated_at?: string
          user_id: string
          value: Json
        }
        Update: {
          created_at?: string
          date?: string
          habit_id?: string
          id?: string
          updated_at?: string
          user_id?: string
          value?: Json
        }
        Relationships: [
          {
            foreignKeyName: "habit_entries_habit_id_fkey"
            columns: ["habit_id"]
            isOneToOne: false
            referencedRelation: "habits"
            referencedColumns: ["id"]
          },
        ]
      }
      habits: {
        Row: {
          color: string | null
          created_at: string
          description: string | null
          habit_type: string
          id: string
          name: string
          options: Json | null
          updated_at: string
          user_id: string
        }
        Insert: {
          color?: string | null
          created_at?: string
          description?: string | null
          habit_type: string
          id?: string
          name: string
          options?: Json | null
          updated_at?: string
          user_id: string
        }
        Update: {
          color?: string | null
          created_at?: string
          description?: string | null
          habit_type?: string
          id?: string
          name?: string
          options?: Json | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      holdings: {
        Row: {
          avg_cost: number
          created_at: string
          current_price: number | null
          id: string
          name: string
          purchase_date: string | null
          shares: number
          symbol: string
          type: string
          updated_at: string
          user_id: string
        }
        Insert: {
          avg_cost: number
          created_at?: string
          current_price?: number | null
          id?: string
          name: string
          purchase_date?: string | null
          shares: number
          symbol: string
          type: string
          updated_at?: string
          user_id: string
        }
        Update: {
          avg_cost?: number
          created_at?: string
          current_price?: number | null
          id?: string
          name?: string
          purchase_date?: string | null
          shares?: number
          symbol?: string
          type?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      integration_analysis: {
        Row: {
          complexity_score: number | null
          created_at: string
          dependencies: Json | null
          detected_flows: Json | null
          endpoints: Json | null
          file_id: string | null
          id: string
          integration_patterns: Json | null
          modernization_opportunities: Json | null
          project_id: string
          updated_at: string
        }
        Insert: {
          complexity_score?: number | null
          created_at?: string
          dependencies?: Json | null
          detected_flows?: Json | null
          endpoints?: Json | null
          file_id?: string | null
          id?: string
          integration_patterns?: Json | null
          modernization_opportunities?: Json | null
          project_id: string
          updated_at?: string
        }
        Update: {
          complexity_score?: number | null
          created_at?: string
          dependencies?: Json | null
          detected_flows?: Json | null
          endpoints?: Json | null
          file_id?: string | null
          id?: string
          integration_patterns?: Json | null
          modernization_opportunities?: Json | null
          project_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "integration_analysis_file_id_fkey"
            columns: ["file_id"]
            isOneToOne: false
            referencedRelation: "migration_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "integration_analysis_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "migration_projects"
            referencedColumns: ["id"]
          },
        ]
      }
      inventory_requests: {
        Row: {
          created_at: string
          id: string
          notes: string | null
          part_name: string
          part_number: string | null
          quantity: number
          requested_by: string
          status: string
          ticket_id: string
          urgency: string
        }
        Insert: {
          created_at?: string
          id?: string
          notes?: string | null
          part_name: string
          part_number?: string | null
          quantity?: number
          requested_by: string
          status?: string
          ticket_id: string
          urgency?: string
        }
        Update: {
          created_at?: string
          id?: string
          notes?: string | null
          part_name?: string
          part_number?: string | null
          quantity?: number
          requested_by?: string
          status?: string
          ticket_id?: string
          urgency?: string
        }
        Relationships: [
          {
            foreignKeyName: "inventory_requests_requested_by_fkey"
            columns: ["requested_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "inventory_requests_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "tickets"
            referencedColumns: ["id"]
          },
        ]
      }
      job_applications: {
        Row: {
          applied_at: string
          created_at: string
          id: string
          job_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          applied_at?: string
          created_at?: string
          id?: string
          job_id: string
          updated_at?: string
          user_id: string
        }
        Update: {
          applied_at?: string
          created_at?: string
          id?: string
          job_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      knowledge_base: {
        Row: {
          category: string
          content: string
          created_at: string | null
          id: string
          project_id: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          category: string
          content: string
          created_at?: string | null
          id?: string
          project_id?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          category?: string
          content?: string
          created_at?: string | null
          id?: string
          project_id?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "knowledge_base_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      leave_requests: {
        Row: {
          created_at: string
          days_count: number
          employee_email: string
          employee_id: string | null
          employee_name: string
          end_date: string
          id: string
          leave_type: string
          location: string | null
          manager_name: string | null
          project_id: string | null
          reason: string | null
          start_date: string
          status: string
          submitted_at: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          days_count: number
          employee_email: string
          employee_id?: string | null
          employee_name: string
          end_date: string
          id?: string
          leave_type: string
          location?: string | null
          manager_name?: string | null
          project_id?: string | null
          reason?: string | null
          start_date: string
          status?: string
          submitted_at?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          days_count?: number
          employee_email?: string
          employee_id?: string | null
          employee_name?: string
          end_date?: string
          id?: string
          leave_type?: string
          location?: string | null
          manager_name?: string | null
          project_id?: string | null
          reason?: string | null
          start_date?: string
          status?: string
          submitted_at?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      lessons: {
        Row: {
          audio_url: string | null
          category_id: string
          content: string
          created_at: string
          difficulty_level: string
          id: string
          image_url: string | null
          language: string
          lesson_type: string
          mouth_movements: Json | null
          order_index: number
          phonetic: string | null
          title: string
          updated_at: string
        }
        Insert: {
          audio_url?: string | null
          category_id: string
          content: string
          created_at?: string
          difficulty_level: string
          id?: string
          image_url?: string | null
          language: string
          lesson_type: string
          mouth_movements?: Json | null
          order_index?: number
          phonetic?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          audio_url?: string | null
          category_id?: string
          content?: string
          created_at?: string
          difficulty_level?: string
          id?: string
          image_url?: string | null
          language?: string
          lesson_type?: string
          mouth_movements?: Json | null
          order_index?: number
          phonetic?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      list_collaborators: {
        Row: {
          id: string
          invited_by: string | null
          joined_at: string
          list_id: string
          permission: string
          user_id: string
        }
        Insert: {
          id?: string
          invited_by?: string | null
          joined_at?: string
          list_id: string
          permission?: string
          user_id: string
        }
        Update: {
          id?: string
          invited_by?: string | null
          joined_at?: string
          list_id?: string
          permission?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "list_collaborators_list_id_fkey"
            columns: ["list_id"]
            isOneToOne: false
            referencedRelation: "shared_shopping_lists"
            referencedColumns: ["id"]
          },
        ]
      }
      match_events: {
        Row: {
          created_at: string
          description: string | null
          event_time: number
          event_type: string
          fixture_id: string
          id: string
          player_id: string | null
          team_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          event_time: number
          event_type: string
          fixture_id: string
          id?: string
          player_id?: string | null
          team_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          event_time?: number
          event_type?: string
          fixture_id?: string
          id?: string
          player_id?: string | null
          team_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "match_events_fixture_id_fkey"
            columns: ["fixture_id"]
            isOneToOne: false
            referencedRelation: "fixtures"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "match_events_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      meeting_notes: {
        Row: {
          content: string
          created_at: string
          id: string
          meeting_id: string
          note_type: string | null
          timestamp_minutes: number | null
          updated_at: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          meeting_id: string
          note_type?: string | null
          timestamp_minutes?: number | null
          updated_at?: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          meeting_id?: string
          note_type?: string | null
          timestamp_minutes?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "meeting_notes_meeting_id_fkey"
            columns: ["meeting_id"]
            isOneToOne: false
            referencedRelation: "meetings"
            referencedColumns: ["id"]
          },
        ]
      }
      meetings: {
        Row: {
          created_at: string
          description: string | null
          duration_minutes: number | null
          id: string
          location: string | null
          meeting_date: string
          meeting_type: string | null
          status: string | null
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          duration_minutes?: number | null
          id?: string
          location?: string | null
          meeting_date?: string
          meeting_type?: string | null
          status?: string | null
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          duration_minutes?: number | null
          id?: string
          location?: string | null
          meeting_date?: string
          meeting_type?: string | null
          status?: string | null
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      metrics: {
        Row: {
          created_at: string | null
          date_recorded: string
          id: string
          metric_type: string
          project_id: string | null
          sprint_id: string | null
          value: number
        }
        Insert: {
          created_at?: string | null
          date_recorded?: string
          id?: string
          metric_type: string
          project_id?: string | null
          sprint_id?: string | null
          value: number
        }
        Update: {
          created_at?: string | null
          date_recorded?: string
          id?: string
          metric_type?: string
          project_id?: string | null
          sprint_id?: string | null
          value?: number
        }
        Relationships: [
          {
            foreignKeyName: "metrics_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "metrics_sprint_id_fkey"
            columns: ["sprint_id"]
            isOneToOne: false
            referencedRelation: "sprints"
            referencedColumns: ["id"]
          },
        ]
      }
      microsoft_connections: {
        Row: {
          access_token: string
          created_at: string
          display_name: string | null
          email: string
          expires_at: string
          id: string
          refresh_token: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          access_token: string
          created_at?: string
          display_name?: string | null
          email: string
          expires_at: string
          id?: string
          refresh_token?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          access_token?: string
          created_at?: string
          display_name?: string | null
          email?: string
          expires_at?: string
          id?: string
          refresh_token?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      migration_files: {
        Row: {
          analysis_status: string | null
          created_at: string
          file_name: string
          file_path: string
          file_size: number
          file_type: string
          id: string
          is_demo_file: boolean | null
          project_id: string
          updated_at: string
        }
        Insert: {
          analysis_status?: string | null
          created_at?: string
          file_name: string
          file_path: string
          file_size: number
          file_type: string
          id?: string
          is_demo_file?: boolean | null
          project_id: string
          updated_at?: string
        }
        Update: {
          analysis_status?: string | null
          created_at?: string
          file_name?: string
          file_path?: string
          file_size?: number
          file_type?: string
          id?: string
          is_demo_file?: boolean | null
          project_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "migration_files_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "migration_projects"
            referencedColumns: ["id"]
          },
        ]
      }
      migration_plan_steps: {
        Row: {
          assignee: string | null
          category: string | null
          created_at: string
          deliverables: Json | null
          dependencies: Json | null
          due_date: string | null
          estimated_hours: number | null
          id: string
          project_id: string
          risk_factors: Json | null
          status: string | null
          step_description: string | null
          step_name: string
          step_number: number
          success_criteria: string | null
          updated_at: string
        }
        Insert: {
          assignee?: string | null
          category?: string | null
          created_at?: string
          deliverables?: Json | null
          dependencies?: Json | null
          due_date?: string | null
          estimated_hours?: number | null
          id?: string
          project_id: string
          risk_factors?: Json | null
          status?: string | null
          step_description?: string | null
          step_name: string
          step_number: number
          success_criteria?: string | null
          updated_at?: string
        }
        Update: {
          assignee?: string | null
          category?: string | null
          created_at?: string
          deliverables?: Json | null
          dependencies?: Json | null
          due_date?: string | null
          estimated_hours?: number | null
          id?: string
          project_id?: string
          risk_factors?: Json | null
          status?: string | null
          step_description?: string | null
          step_name?: string
          step_number?: number
          success_criteria?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "migration_plan_steps_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "migration_projects"
            referencedColumns: ["id"]
          },
        ]
      }
      migration_projects: {
        Row: {
          actual_effort_hours: number | null
          confidence_score: number | null
          created_at: string
          description: string | null
          estimated_effort_hours: number | null
          id: string
          legacy_platform: string | null
          priority: string | null
          project_id: string | null
          project_name: string
          risk_score: number | null
          status: string
          target_cloud_provider: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          actual_effort_hours?: number | null
          confidence_score?: number | null
          created_at?: string
          description?: string | null
          estimated_effort_hours?: number | null
          id?: string
          legacy_platform?: string | null
          priority?: string | null
          project_id?: string | null
          project_name: string
          risk_score?: number | null
          status?: string
          target_cloud_provider?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          actual_effort_hours?: number | null
          confidence_score?: number | null
          created_at?: string
          description?: string | null
          estimated_effort_hours?: number | null
          id?: string
          legacy_platform?: string | null
          priority?: string | null
          project_id?: string | null
          project_name?: string
          risk_score?: number | null
          status?: string
          target_cloud_provider?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      migration_recommendations: {
        Row: {
          analysis_id: string | null
          cloud_provider: string
          confidence_score: number | null
          cost_impact: string | null
          created_at: string
          effort_estimate_hours: number | null
          id: string
          legacy_component: string
          modernization_benefits: Json | null
          project_id: string
          recommended_service: string
          risk_level: string | null
          transformation_steps: Json | null
          updated_at: string
        }
        Insert: {
          analysis_id?: string | null
          cloud_provider: string
          confidence_score?: number | null
          cost_impact?: string | null
          created_at?: string
          effort_estimate_hours?: number | null
          id?: string
          legacy_component: string
          modernization_benefits?: Json | null
          project_id: string
          recommended_service: string
          risk_level?: string | null
          transformation_steps?: Json | null
          updated_at?: string
        }
        Update: {
          analysis_id?: string | null
          cloud_provider?: string
          confidence_score?: number | null
          cost_impact?: string | null
          created_at?: string
          effort_estimate_hours?: number | null
          id?: string
          legacy_component?: string
          modernization_benefits?: Json | null
          project_id?: string
          recommended_service?: string
          risk_level?: string | null
          transformation_steps?: Json | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "migration_recommendations_analysis_id_fkey"
            columns: ["analysis_id"]
            isOneToOne: false
            referencedRelation: "integration_analysis"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "migration_recommendations_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "migration_projects"
            referencedColumns: ["id"]
          },
        ]
      }
      monthly_performance_scores: {
        Row: {
          associate_id: string
          certifications_completed: string[] | null
          created_at: string
          feedback_score: number | null
          goals_achieved: number | null
          goals_total: number | null
          id: string
          month: number
          okr_score: number
          performance_rating: string | null
          training_hours: number | null
          updated_at: string
          year: number
        }
        Insert: {
          associate_id: string
          certifications_completed?: string[] | null
          created_at?: string
          feedback_score?: number | null
          goals_achieved?: number | null
          goals_total?: number | null
          id?: string
          month: number
          okr_score: number
          performance_rating?: string | null
          training_hours?: number | null
          updated_at?: string
          year: number
        }
        Update: {
          associate_id?: string
          certifications_completed?: string[] | null
          created_at?: string
          feedback_score?: number | null
          goals_achieved?: number | null
          goals_total?: number | null
          id?: string
          month?: number
          okr_score?: number
          performance_rating?: string | null
          training_hours?: number | null
          updated_at?: string
          year?: number
        }
        Relationships: [
          {
            foreignKeyName: "monthly_performance_scores_associate_id_fkey"
            columns: ["associate_id"]
            isOneToOne: false
            referencedRelation: "associates"
            referencedColumns: ["id"]
          },
        ]
      }
      mood_entries: {
        Row: {
          context: string | null
          created_at: string
          energy_level: number
          id: string
          location: string | null
          mood_score: number
          mood_tags: string[] | null
          notes: string | null
          stress_level: number
          updated_at: string
          user_id: string
          weather: string | null
        }
        Insert: {
          context?: string | null
          created_at?: string
          energy_level: number
          id?: string
          location?: string | null
          mood_score: number
          mood_tags?: string[] | null
          notes?: string | null
          stress_level: number
          updated_at?: string
          user_id: string
          weather?: string | null
        }
        Update: {
          context?: string | null
          created_at?: string
          energy_level?: number
          id?: string
          location?: string | null
          mood_score?: number
          mood_tags?: string[] | null
          notes?: string | null
          stress_level?: number
          updated_at?: string
          user_id?: string
          weather?: string | null
        }
        Relationships: []
      }
      nominations: {
        Row: {
          category: Database["public"]["Enums"]["award_category"]
          created_at: string
          customer_appreciations: string | null
          description: string
          edp: string
          id: string
          nominator_id: string
          pdl: string
          project_id: string
          project_name: string
          project_spoc: string
          screenshot_urls: string[] | null
          service_lines: Json
          updated_at: string
        }
        Insert: {
          category: Database["public"]["Enums"]["award_category"]
          created_at?: string
          customer_appreciations?: string | null
          description: string
          edp: string
          id?: string
          nominator_id: string
          pdl: string
          project_id: string
          project_name: string
          project_spoc: string
          screenshot_urls?: string[] | null
          service_lines?: Json
          updated_at?: string
        }
        Update: {
          category?: Database["public"]["Enums"]["award_category"]
          created_at?: string
          customer_appreciations?: string | null
          description?: string
          edp?: string
          id?: string
          nominator_id?: string
          pdl?: string
          project_id?: string
          project_name?: string
          project_spoc?: string
          screenshot_urls?: string[] | null
          service_lines?: Json
          updated_at?: string
        }
        Relationships: []
      }
      office_floors: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          occupied_seats: number
          total_seats: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          occupied_seats?: number
          total_seats?: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          occupied_seats?: number
          total_seats?: number
          updated_at?: string
        }
        Relationships: []
      }
      onboarding: {
        Row: {
          associate_name: string
          created_at: string
          fully_onboarded_date: string | null
          id: string
          location: string | null
          onboarding_status: string
          request_id: string
          skillset: string | null
          updated_at: string
          user_account_received_on: string | null
          user_account_requested_on: string | null
          user_id: string
        }
        Insert: {
          associate_name: string
          created_at?: string
          fully_onboarded_date?: string | null
          id?: string
          location?: string | null
          onboarding_status?: string
          request_id: string
          skillset?: string | null
          updated_at?: string
          user_account_received_on?: string | null
          user_account_requested_on?: string | null
          user_id: string
        }
        Update: {
          associate_name?: string
          created_at?: string
          fully_onboarded_date?: string | null
          id?: string
          location?: string | null
          onboarding_status?: string
          request_id?: string
          skillset?: string | null
          updated_at?: string
          user_account_received_on?: string | null
          user_account_requested_on?: string | null
          user_id?: string
        }
        Relationships: []
      }
      order_items: {
        Row: {
          created_at: string
          id: string
          order_id: string | null
          product_id: string | null
          quantity: number
          total_price: number
          unit_price: number
          weight_option: string
        }
        Insert: {
          created_at?: string
          id?: string
          order_id?: string | null
          product_id?: string | null
          quantity: number
          total_price: number
          unit_price: number
          weight_option: string
        }
        Update: {
          created_at?: string
          id?: string
          order_id?: string | null
          product_id?: string | null
          quantity?: number
          total_price?: number
          unit_price?: number
          weight_option?: string
        }
        Relationships: [
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "dry_fruits_products"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          billing_address: Json | null
          created_at: string
          discount_amount: number | null
          id: string
          notes: string | null
          order_number: string
          payment_method: string | null
          payment_status: string | null
          shipping_address: Json | null
          shipping_amount: number | null
          status: string | null
          tax_amount: number | null
          total_amount: number
          updated_at: string
          user_id: string | null
        }
        Insert: {
          billing_address?: Json | null
          created_at?: string
          discount_amount?: number | null
          id?: string
          notes?: string | null
          order_number: string
          payment_method?: string | null
          payment_status?: string | null
          shipping_address?: Json | null
          shipping_amount?: number | null
          status?: string | null
          tax_amount?: number | null
          total_amount: number
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          billing_address?: Json | null
          created_at?: string
          discount_amount?: number | null
          id?: string
          notes?: string | null
          order_number?: string
          payment_method?: string | null
          payment_status?: string | null
          shipping_address?: Json | null
          shipping_amount?: number | null
          status?: string | null
          tax_amount?: number | null
          total_amount?: number
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      participants: {
        Row: {
          attendance_status: string | null
          created_at: string
          email: string | null
          id: string
          meeting_id: string
          name: string
          role: string | null
          updated_at: string
        }
        Insert: {
          attendance_status?: string | null
          created_at?: string
          email?: string | null
          id?: string
          meeting_id: string
          name: string
          role?: string | null
          updated_at?: string
        }
        Update: {
          attendance_status?: string | null
          created_at?: string
          email?: string | null
          id?: string
          meeting_id?: string
          name?: string
          role?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "participants_meeting_id_fkey"
            columns: ["meeting_id"]
            isOneToOne: false
            referencedRelation: "meetings"
            referencedColumns: ["id"]
          },
        ]
      }
      pcsat_analysis_results: {
        Row: {
          account_id: string
          analysis_date: string
          created_at: string
          dgd_current_issues: string | null
          dgd_file_id: string | null
          id: string
          opportunities: string | null
          pcsat_file_id: string | null
          project_id: string
          project_name: string
          summary_of_concerns: string | null
          summary_of_recommended_actions: string | null
          uncovered_items: string[] | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          account_id: string
          analysis_date?: string
          created_at?: string
          dgd_current_issues?: string | null
          dgd_file_id?: string | null
          id?: string
          opportunities?: string | null
          pcsat_file_id?: string | null
          project_id: string
          project_name: string
          summary_of_concerns?: string | null
          summary_of_recommended_actions?: string | null
          uncovered_items?: string[] | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          account_id?: string
          analysis_date?: string
          created_at?: string
          dgd_current_issues?: string | null
          dgd_file_id?: string | null
          id?: string
          opportunities?: string | null
          pcsat_file_id?: string | null
          project_id?: string
          project_name?: string
          summary_of_concerns?: string | null
          summary_of_recommended_actions?: string | null
          uncovered_items?: string[] | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pcsat_analysis_results_dgd_file_id_fkey"
            columns: ["dgd_file_id"]
            isOneToOne: false
            referencedRelation: "pcsat_file_uploads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pcsat_analysis_results_pcsat_file_id_fkey"
            columns: ["pcsat_file_id"]
            isOneToOne: false
            referencedRelation: "pcsat_file_uploads"
            referencedColumns: ["id"]
          },
        ]
      }
      pcsat_data: {
        Row: {
          account_id: string | null
          concerns: string | null
          created_at: string
          feedback: string | null
          file_upload_id: string | null
          id: string
          project_id: string
          project_name: string | null
          raw_data: Json | null
          recommended_actions: string | null
          updated_at: string
        }
        Insert: {
          account_id?: string | null
          concerns?: string | null
          created_at?: string
          feedback?: string | null
          file_upload_id?: string | null
          id?: string
          project_id: string
          project_name?: string | null
          raw_data?: Json | null
          recommended_actions?: string | null
          updated_at?: string
        }
        Update: {
          account_id?: string | null
          concerns?: string | null
          created_at?: string
          feedback?: string | null
          file_upload_id?: string | null
          id?: string
          project_id?: string
          project_name?: string | null
          raw_data?: Json | null
          recommended_actions?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "pcsat_data_file_upload_id_fkey"
            columns: ["file_upload_id"]
            isOneToOne: false
            referencedRelation: "pcsat_file_uploads"
            referencedColumns: ["id"]
          },
        ]
      }
      pcsat_file_uploads: {
        Row: {
          created_at: string
          file_name: string
          file_path: string
          file_size: number
          file_type: string
          id: string
          status: string
          updated_at: string
          upload_date: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          file_name: string
          file_path: string
          file_size: number
          file_type: string
          id?: string
          status?: string
          updated_at?: string
          upload_date?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          file_name?: string
          file_path?: string
          file_size?: number
          file_type?: string
          id?: string
          status?: string
          updated_at?: string
          upload_date?: string
          user_id?: string | null
        }
        Relationships: []
      }
      performance_analytics: {
        Row: {
          created_at: string
          data_summary: Json
          id: string
          total_employees: number
          total_tickets: number
          updated_at: string
          upload_date: string
        }
        Insert: {
          created_at?: string
          data_summary: Json
          id?: string
          total_employees: number
          total_tickets: number
          updated_at?: string
          upload_date?: string
        }
        Update: {
          created_at?: string
          data_summary?: Json
          id?: string
          total_employees?: number
          total_tickets?: number
          updated_at?: string
          upload_date?: string
        }
        Relationships: []
      }
      performance_snapshots: {
        Row: {
          created_at: string
          day_change: number | null
          day_change_percent: number | null
          id: string
          snapshot_date: string
          total_gain_loss: number
          total_gain_loss_percent: number
          total_value: number
          user_id: string
        }
        Insert: {
          created_at?: string
          day_change?: number | null
          day_change_percent?: number | null
          id?: string
          snapshot_date?: string
          total_gain_loss: number
          total_gain_loss_percent: number
          total_value: number
          user_id: string
        }
        Update: {
          created_at?: string
          day_change?: number | null
          day_change_percent?: number | null
          id?: string
          snapshot_date?: string
          total_gain_loss?: number
          total_gain_loss_percent?: number
          total_value?: number
          user_id?: string
        }
        Relationships: []
      }
      pet_properties: {
        Row: {
          amenities: string[] | null
          animal_types: string[]
          city: string
          created_at: string
          description: string | null
          id: string
          images: string[] | null
          is_active: boolean
          latitude: number | null
          location: string
          longitude: number | null
          max_pets: number
          owner_id: string
          price_per_night: number
          title: string
          updated_at: string
        }
        Insert: {
          amenities?: string[] | null
          animal_types?: string[]
          city: string
          created_at?: string
          description?: string | null
          id?: string
          images?: string[] | null
          is_active?: boolean
          latitude?: number | null
          location: string
          longitude?: number | null
          max_pets?: number
          owner_id: string
          price_per_night: number
          title: string
          updated_at?: string
        }
        Update: {
          amenities?: string[] | null
          animal_types?: string[]
          city?: string
          created_at?: string
          description?: string | null
          id?: string
          images?: string[] | null
          is_active?: boolean
          latitude?: number | null
          location?: string
          longitude?: number | null
          max_pets?: number
          owner_id?: string
          price_per_night?: number
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      pets: {
        Row: {
          adoption_fee: number | null
          age_months: number | null
          age_years: number | null
          breed: string | null
          contact_email: string | null
          contact_phone: string | null
          created_at: string
          description: string | null
          gender: string | null
          id: string
          image_url: string | null
          is_available: boolean | null
          location: string | null
          medical_history: string | null
          name: string
          personality: string[] | null
          size: string | null
          species: string
          updated_at: string
        }
        Insert: {
          adoption_fee?: number | null
          age_months?: number | null
          age_years?: number | null
          breed?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          created_at?: string
          description?: string | null
          gender?: string | null
          id?: string
          image_url?: string | null
          is_available?: boolean | null
          location?: string | null
          medical_history?: string | null
          name: string
          personality?: string[] | null
          size?: string | null
          species: string
          updated_at?: string
        }
        Update: {
          adoption_fee?: number | null
          age_months?: number | null
          age_years?: number | null
          breed?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          created_at?: string
          description?: string | null
          gender?: string | null
          id?: string
          image_url?: string | null
          is_available?: boolean | null
          location?: string | null
          medical_history?: string | null
          name?: string
          personality?: string[] | null
          size?: string | null
          species?: string
          updated_at?: string
        }
        Relationships: []
      }
      player_stats: {
        Row: {
          appearances: number | null
          assists: number | null
          created_at: string
          goals: number | null
          id: string
          minutes_played: number | null
          player_id: string
          red_cards: number | null
          season: string
          team_id: string
          updated_at: string
          yellow_cards: number | null
        }
        Insert: {
          appearances?: number | null
          assists?: number | null
          created_at?: string
          goals?: number | null
          id?: string
          minutes_played?: number | null
          player_id: string
          red_cards?: number | null
          season: string
          team_id: string
          updated_at?: string
          yellow_cards?: number | null
        }
        Update: {
          appearances?: number | null
          assists?: number | null
          created_at?: string
          goals?: number | null
          id?: string
          minutes_played?: number | null
          player_id?: string
          red_cards?: number | null
          season?: string
          team_id?: string
          updated_at?: string
          yellow_cards?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "player_stats_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      pomodoro_sessions: {
        Row: {
          actual_duration: number | null
          completed: boolean
          created_at: string
          distractions_count: number | null
          end_time: string | null
          energy_level: number | null
          focus_quality: string | null
          id: string
          interrupted: boolean
          notes: string | null
          planned_duration: number
          productivity_rating: number | null
          session_type: string
          start_time: string
          task_description: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          actual_duration?: number | null
          completed?: boolean
          created_at?: string
          distractions_count?: number | null
          end_time?: string | null
          energy_level?: number | null
          focus_quality?: string | null
          id?: string
          interrupted?: boolean
          notes?: string | null
          planned_duration: number
          productivity_rating?: number | null
          session_type: string
          start_time?: string
          task_description?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          actual_duration?: number | null
          completed?: boolean
          created_at?: string
          distractions_count?: number | null
          end_time?: string | null
          energy_level?: number | null
          focus_quality?: string | null
          id?: string
          interrupted?: boolean
          notes?: string | null
          planned_duration?: number
          productivity_rating?: number | null
          session_type?: string
          start_time?: string
          task_description?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      pomodoro_settings: {
        Row: {
          adaptive_timing: boolean
          auto_start_breaks: boolean
          auto_start_work: boolean
          break_activities: Json | null
          created_at: string
          id: string
          long_break_duration: number
          notification_enabled: boolean
          optimal_break_duration: number | null
          optimal_work_duration: number | null
          preferred_work_hours: Json | null
          productivity_tracking: boolean
          sessions_until_long_break: number
          short_break_duration: number
          sound_enabled: boolean
          updated_at: string
          user_id: string
          work_duration: number
        }
        Insert: {
          adaptive_timing?: boolean
          auto_start_breaks?: boolean
          auto_start_work?: boolean
          break_activities?: Json | null
          created_at?: string
          id?: string
          long_break_duration?: number
          notification_enabled?: boolean
          optimal_break_duration?: number | null
          optimal_work_duration?: number | null
          preferred_work_hours?: Json | null
          productivity_tracking?: boolean
          sessions_until_long_break?: number
          short_break_duration?: number
          sound_enabled?: boolean
          updated_at?: string
          user_id: string
          work_duration?: number
        }
        Update: {
          adaptive_timing?: boolean
          auto_start_breaks?: boolean
          auto_start_work?: boolean
          break_activities?: Json | null
          created_at?: string
          id?: string
          long_break_duration?: number
          notification_enabled?: boolean
          optimal_break_duration?: number | null
          optimal_work_duration?: number | null
          preferred_work_hours?: Json | null
          productivity_tracking?: boolean
          sessions_until_long_break?: number
          short_break_duration?: number
          sound_enabled?: boolean
          updated_at?: string
          user_id?: string
          work_duration?: number
        }
        Relationships: []
      }
      price_alerts: {
        Row: {
          created_at: string
          current_price: number | null
          id: string
          is_active: boolean
          notified_at: string | null
          product_id: string
          target_price: number
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          current_price?: number | null
          id?: string
          is_active?: boolean
          notified_at?: string | null
          product_id: string
          target_price: number
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          current_price?: number | null
          id?: string
          is_active?: boolean
          notified_at?: string | null
          product_id?: string
          target_price?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "price_alerts_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "grocery_items"
            referencedColumns: ["id"]
          },
        ]
      }
      privacy_consents: {
        Row: {
          consent_date: string
          consent_type: string
          consent_version: string
          consented: boolean
          created_at: string
          id: string
          ip_address: unknown | null
          updated_at: string
          user_agent: string | null
          user_id: string
        }
        Insert: {
          consent_date?: string
          consent_type: string
          consent_version?: string
          consented?: boolean
          created_at?: string
          id?: string
          ip_address?: unknown | null
          updated_at?: string
          user_agent?: string | null
          user_id: string
        }
        Update: {
          consent_date?: string
          consent_type?: string
          consent_version?: string
          consented?: boolean
          created_at?: string
          id?: string
          ip_address?: unknown | null
          updated_at?: string
          user_agent?: string | null
          user_id?: string
        }
        Relationships: []
      }
      product_reviews: {
        Row: {
          created_at: string
          helpful_count: number | null
          id: string
          product_id: string | null
          rating: number
          review_text: string | null
          title: string | null
          updated_at: string
          user_id: string | null
          verified_purchase: boolean | null
        }
        Insert: {
          created_at?: string
          helpful_count?: number | null
          id?: string
          product_id?: string | null
          rating: number
          review_text?: string | null
          title?: string | null
          updated_at?: string
          user_id?: string | null
          verified_purchase?: boolean | null
        }
        Update: {
          created_at?: string
          helpful_count?: number | null
          id?: string
          product_id?: string | null
          rating?: number
          review_text?: string | null
          title?: string | null
          updated_at?: string
          user_id?: string | null
          verified_purchase?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "product_reviews_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "dry_fruits_products"
            referencedColumns: ["id"]
          },
        ]
      }
      productivity_metrics: {
        Row: {
          average_energy_level: number | null
          average_focus_quality: number | null
          average_productivity_rating: number | null
          break_effectiveness_score: number | null
          completed_sessions: number | null
          created_at: string
          date: string
          hour_of_day: number
          id: string
          interrupted_sessions: number | null
          monthly_trend: number | null
          optimal_session_length: number | null
          peak_productivity_hour: number | null
          total_distractions: number | null
          total_work_minutes: number | null
          total_work_sessions: number | null
          updated_at: string
          user_id: string
          weekly_trend: number | null
        }
        Insert: {
          average_energy_level?: number | null
          average_focus_quality?: number | null
          average_productivity_rating?: number | null
          break_effectiveness_score?: number | null
          completed_sessions?: number | null
          created_at?: string
          date: string
          hour_of_day: number
          id?: string
          interrupted_sessions?: number | null
          monthly_trend?: number | null
          optimal_session_length?: number | null
          peak_productivity_hour?: number | null
          total_distractions?: number | null
          total_work_minutes?: number | null
          total_work_sessions?: number | null
          updated_at?: string
          user_id: string
          weekly_trend?: number | null
        }
        Update: {
          average_energy_level?: number | null
          average_focus_quality?: number | null
          average_productivity_rating?: number | null
          break_effectiveness_score?: number | null
          completed_sessions?: number | null
          created_at?: string
          date?: string
          hour_of_day?: number
          id?: string
          interrupted_sessions?: number | null
          monthly_trend?: number | null
          optimal_session_length?: number | null
          peak_productivity_hour?: number | null
          total_distractions?: number | null
          total_work_minutes?: number | null
          total_work_sessions?: number | null
          updated_at?: string
          user_id?: string
          weekly_trend?: number | null
        }
        Relationships: []
      }
      products: {
        Row: {
          brand: string | null
          category: string
          created_at: string
          description: string | null
          id: string
          image_url: string | null
          in_stock: boolean | null
          name: string
          price: number
          stock_quantity: number | null
          updated_at: string
        }
        Insert: {
          brand?: string | null
          category: string
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          in_stock?: boolean | null
          name: string
          price: number
          stock_quantity?: number | null
          updated_at?: string
        }
        Update: {
          brand?: string | null
          category?: string
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          in_stock?: boolean | null
          name?: string
          price?: number
          stock_quantity?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          accessibility_settings: Json | null
          account_name: string | null
          address: string | null
          address_1: string | null
          address_2: string | null
          avatar_url: string | null
          bio: string | null
          city: string | null
          country: string | null
          created_at: string
          current_level_points: number
          date_of_birth: string | null
          department: string | null
          did_api_key: string | null
          display_name: string | null
          doctor_license_number: string | null
          doctor_specialty: string | null
          elevenlabs_api_key: string | null
          email: string
          emergency_contact_name: string | null
          emergency_contact_phone: string | null
          employee_id: string | null
          exterior_number: string | null
          facebook_url: string | null
          first_name: string | null
          full_name: string | null
          gender: string | null
          id: string
          interests: string[] | null
          interior_number: string | null
          is_active: boolean
          last_name: string | null
          level: number
          location: string | null
          municipality: string | null
          neighborhood: string | null
          phone: string | null
          profile_visible: boolean | null
          project_name: string | null
          role: string | null
          selected_language: string | null
          show_address: boolean | null
          show_bio: boolean | null
          show_email: boolean | null
          show_facebook: boolean | null
          show_full_name: boolean | null
          show_interests: boolean | null
          show_phone: boolean | null
          show_website: boolean | null
          skills: string[] | null
          state: string | null
          state_code: string | null
          total_points: number
          updated_at: string
          user_id: string
          user_type: string
          username: string | null
          voice_settings: Json | null
          website_url: string | null
          zip_code: string | null
        }
        Insert: {
          accessibility_settings?: Json | null
          account_name?: string | null
          address?: string | null
          address_1?: string | null
          address_2?: string | null
          avatar_url?: string | null
          bio?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          current_level_points?: number
          date_of_birth?: string | null
          department?: string | null
          did_api_key?: string | null
          display_name?: string | null
          doctor_license_number?: string | null
          doctor_specialty?: string | null
          elevenlabs_api_key?: string | null
          email: string
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          employee_id?: string | null
          exterior_number?: string | null
          facebook_url?: string | null
          first_name?: string | null
          full_name?: string | null
          gender?: string | null
          id?: string
          interests?: string[] | null
          interior_number?: string | null
          is_active?: boolean
          last_name?: string | null
          level?: number
          location?: string | null
          municipality?: string | null
          neighborhood?: string | null
          phone?: string | null
          profile_visible?: boolean | null
          project_name?: string | null
          role?: string | null
          selected_language?: string | null
          show_address?: boolean | null
          show_bio?: boolean | null
          show_email?: boolean | null
          show_facebook?: boolean | null
          show_full_name?: boolean | null
          show_interests?: boolean | null
          show_phone?: boolean | null
          show_website?: boolean | null
          skills?: string[] | null
          state?: string | null
          state_code?: string | null
          total_points?: number
          updated_at?: string
          user_id: string
          user_type?: string
          username?: string | null
          voice_settings?: Json | null
          website_url?: string | null
          zip_code?: string | null
        }
        Update: {
          accessibility_settings?: Json | null
          account_name?: string | null
          address?: string | null
          address_1?: string | null
          address_2?: string | null
          avatar_url?: string | null
          bio?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          current_level_points?: number
          date_of_birth?: string | null
          department?: string | null
          did_api_key?: string | null
          display_name?: string | null
          doctor_license_number?: string | null
          doctor_specialty?: string | null
          elevenlabs_api_key?: string | null
          email?: string
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          employee_id?: string | null
          exterior_number?: string | null
          facebook_url?: string | null
          first_name?: string | null
          full_name?: string | null
          gender?: string | null
          id?: string
          interests?: string[] | null
          interior_number?: string | null
          is_active?: boolean
          last_name?: string | null
          level?: number
          location?: string | null
          municipality?: string | null
          neighborhood?: string | null
          phone?: string | null
          profile_visible?: boolean | null
          project_name?: string | null
          role?: string | null
          selected_language?: string | null
          show_address?: boolean | null
          show_bio?: boolean | null
          show_email?: boolean | null
          show_facebook?: boolean | null
          show_full_name?: boolean | null
          show_interests?: boolean | null
          show_phone?: boolean | null
          show_website?: boolean | null
          skills?: string[] | null
          state?: string | null
          state_code?: string | null
          total_points?: number
          updated_at?: string
          user_id?: string
          user_type?: string
          username?: string | null
          voice_settings?: Json | null
          website_url?: string | null
          zip_code?: string | null
        }
        Relationships: []
      }
      project_names: {
        Row: {
          account_name_id: string | null
          created_at: string
          created_by: string | null
          description: string | null
          id: string
          is_active: boolean
          name: string
          updated_at: string
        }
        Insert: {
          account_name_id?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          is_active?: boolean
          name: string
          updated_at?: string
        }
        Update: {
          account_name_id?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          is_active?: boolean
          name?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_names_account_name_id_fkey"
            columns: ["account_name_id"]
            isOneToOne: false
            referencedRelation: "account_names"
            referencedColumns: ["id"]
          },
        ]
      }
      project_questions: {
        Row: {
          category: string | null
          created_at: string
          id: string
          priority: string | null
          project_id: string
          question: string
          question_type: string | null
          tags: string[] | null
          updated_at: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          id?: string
          priority?: string | null
          project_id: string
          question: string
          question_type?: string | null
          tags?: string[] | null
          updated_at?: string
        }
        Update: {
          category?: string | null
          created_at?: string
          id?: string
          priority?: string | null
          project_id?: string
          question?: string
          question_type?: string | null
          tags?: string[] | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_questions_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          application_id: string | null
          budget_allocated: number | null
          budget_spent: number | null
          change_requests: string[] | null
          client_company: string | null
          communication_plan: string | null
          cost_center: string | null
          created_at: string
          deliverables: string[] | null
          dependencies: string[] | null
          description: string | null
          duration: number | null
          escalation_path: string | null
          go_live_date: string | null
          id: string
          milestones: string[] | null
          name: string
          objectives: string | null
          priority: string | null
          progress: number | null
          project_id: string | null
          project_manager: string | null
          project_owner: string | null
          project_type: string | null
          quality_standards: string | null
          reporting_frequency: string | null
          resource_requirements: string | null
          risk_assessment: string | null
          roles_responsibilities: string | null
          scope_boundaries: string | null
          stakeholders: string[] | null
          status: string
          success_criteria: string | null
          team_members: string[] | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          application_id?: string | null
          budget_allocated?: number | null
          budget_spent?: number | null
          change_requests?: string[] | null
          client_company?: string | null
          communication_plan?: string | null
          cost_center?: string | null
          created_at?: string
          deliverables?: string[] | null
          dependencies?: string[] | null
          description?: string | null
          duration?: number | null
          escalation_path?: string | null
          go_live_date?: string | null
          id?: string
          milestones?: string[] | null
          name: string
          objectives?: string | null
          priority?: string | null
          progress?: number | null
          project_id?: string | null
          project_manager?: string | null
          project_owner?: string | null
          project_type?: string | null
          quality_standards?: string | null
          reporting_frequency?: string | null
          resource_requirements?: string | null
          risk_assessment?: string | null
          roles_responsibilities?: string | null
          scope_boundaries?: string | null
          stakeholders?: string[] | null
          status?: string
          success_criteria?: string | null
          team_members?: string[] | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          application_id?: string | null
          budget_allocated?: number | null
          budget_spent?: number | null
          change_requests?: string[] | null
          client_company?: string | null
          communication_plan?: string | null
          cost_center?: string | null
          created_at?: string
          deliverables?: string[] | null
          dependencies?: string[] | null
          description?: string | null
          duration?: number | null
          escalation_path?: string | null
          go_live_date?: string | null
          id?: string
          milestones?: string[] | null
          name?: string
          objectives?: string | null
          priority?: string | null
          progress?: number | null
          project_id?: string | null
          project_manager?: string | null
          project_owner?: string | null
          project_type?: string | null
          quality_standards?: string | null
          reporting_frequency?: string | null
          resource_requirements?: string | null
          risk_assessment?: string | null
          roles_responsibilities?: string | null
          scope_boundaries?: string | null
          stakeholders?: string[] | null
          status?: string
          success_criteria?: string | null
          team_members?: string[] | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "projects_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["id"]
          },
        ]
      }
      purchase_orders: {
        Row: {
          created_at: string
          id: string
          po_number: string
          status: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          po_number: string
          status?: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          po_number?: string
          status?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      question_options: {
        Row: {
          id: string
          is_correct: boolean
          option_text: string
          order_index: number
          question_id: string
        }
        Insert: {
          id?: string
          is_correct?: boolean
          option_text: string
          order_index?: number
          question_id: string
        }
        Update: {
          id?: string
          is_correct?: boolean
          option_text?: string
          order_index?: number
          question_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "question_options_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "questions"
            referencedColumns: ["id"]
          },
        ]
      }
      questions: {
        Row: {
          correct_answer: string | null
          created_at: string
          explanation: string | null
          id: string
          order_index: number
          points: number
          question_text: string
          question_type: Database["public"]["Enums"]["question_type"]
          quiz_id: string
        }
        Insert: {
          correct_answer?: string | null
          created_at?: string
          explanation?: string | null
          id?: string
          order_index?: number
          points?: number
          question_text: string
          question_type: Database["public"]["Enums"]["question_type"]
          quiz_id: string
        }
        Update: {
          correct_answer?: string | null
          created_at?: string
          explanation?: string | null
          id?: string
          order_index?: number
          points?: number
          question_text?: string
          question_type?: Database["public"]["Enums"]["question_type"]
          quiz_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "questions_quiz_id_fkey"
            columns: ["quiz_id"]
            isOneToOne: false
            referencedRelation: "quizzes"
            referencedColumns: ["id"]
          },
        ]
      }
      quiz_attempts: {
        Row: {
          completed_at: string | null
          created_at: string
          id: string
          percentage: number
          quiz_id: string
          score: number
          started_at: string
          status: string
          time_taken_minutes: number | null
          total_points: number
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          id?: string
          percentage?: number
          quiz_id: string
          score?: number
          started_at?: string
          status?: string
          time_taken_minutes?: number | null
          total_points?: number
          user_id: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          id?: string
          percentage?: number
          quiz_id?: string
          score?: number
          started_at?: string
          status?: string
          time_taken_minutes?: number | null
          total_points?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "quiz_attempts_quiz_id_fkey"
            columns: ["quiz_id"]
            isOneToOne: false
            referencedRelation: "quizzes"
            referencedColumns: ["id"]
          },
        ]
      }
      quiz_responses: {
        Row: {
          answer_text: string | null
          attempt_id: string
          created_at: string
          id: string
          is_correct: boolean
          points_earned: number
          question_id: string
          selected_option_id: string | null
        }
        Insert: {
          answer_text?: string | null
          attempt_id: string
          created_at?: string
          id?: string
          is_correct?: boolean
          points_earned?: number
          question_id: string
          selected_option_id?: string | null
        }
        Update: {
          answer_text?: string | null
          attempt_id?: string
          created_at?: string
          id?: string
          is_correct?: boolean
          points_earned?: number
          question_id?: string
          selected_option_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "quiz_responses_attempt_id_fkey"
            columns: ["attempt_id"]
            isOneToOne: false
            referencedRelation: "quiz_attempts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "quiz_responses_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "questions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "quiz_responses_selected_option_id_fkey"
            columns: ["selected_option_id"]
            isOneToOne: false
            referencedRelation: "question_options"
            referencedColumns: ["id"]
          },
        ]
      }
      quizzes: {
        Row: {
          account_name: string
          created_at: string
          created_by: string
          description: string | null
          id: string
          instructions: string | null
          is_active: boolean
          month: string
          passing_score: number | null
          team_name: string
          time_limit_minutes: number | null
          title: string
          updated_at: string
        }
        Insert: {
          account_name: string
          created_at?: string
          created_by: string
          description?: string | null
          id?: string
          instructions?: string | null
          is_active?: boolean
          month: string
          passing_score?: number | null
          team_name: string
          time_limit_minutes?: number | null
          title: string
          updated_at?: string
        }
        Update: {
          account_name?: string
          created_at?: string
          created_by?: string
          description?: string | null
          id?: string
          instructions?: string | null
          is_active?: boolean
          month?: string
          passing_score?: number | null
          team_name?: string
          time_limit_minutes?: number | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      recipe_ingredients: {
        Row: {
          created_at: string
          id: string
          ingredient_name: string
          is_optional: boolean
          notes: string | null
          product_id: string | null
          quantity: number
          recipe_id: string
          unit: string
        }
        Insert: {
          created_at?: string
          id?: string
          ingredient_name: string
          is_optional?: boolean
          notes?: string | null
          product_id?: string | null
          quantity: number
          recipe_id: string
          unit: string
        }
        Update: {
          created_at?: string
          id?: string
          ingredient_name?: string
          is_optional?: boolean
          notes?: string | null
          product_id?: string | null
          quantity?: number
          recipe_id?: string
          unit?: string
        }
        Relationships: [
          {
            foreignKeyName: "recipe_ingredients_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "grocery_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recipe_ingredients_recipe_id_fkey"
            columns: ["recipe_id"]
            isOneToOne: false
            referencedRelation: "recipes"
            referencedColumns: ["id"]
          },
        ]
      }
      recipe_likes: {
        Row: {
          created_at: string
          id: string
          recipe_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          recipe_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          recipe_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "recipe_likes_recipe_id_fkey"
            columns: ["recipe_id"]
            isOneToOne: false
            referencedRelation: "recipes"
            referencedColumns: ["id"]
          },
        ]
      }
      recipes: {
        Row: {
          cook_time: number | null
          created_at: string
          created_by: string
          cuisine_type: string | null
          description: string | null
          dietary_tags: string[] | null
          difficulty: string | null
          id: string
          image_url: string | null
          instructions: string
          is_public: boolean
          likes_count: number
          name: string
          prep_time: number | null
          servings: number
          updated_at: string
        }
        Insert: {
          cook_time?: number | null
          created_at?: string
          created_by: string
          cuisine_type?: string | null
          description?: string | null
          dietary_tags?: string[] | null
          difficulty?: string | null
          id?: string
          image_url?: string | null
          instructions: string
          is_public?: boolean
          likes_count?: number
          name: string
          prep_time?: number | null
          servings?: number
          updated_at?: string
        }
        Update: {
          cook_time?: number | null
          created_at?: string
          created_by?: string
          cuisine_type?: string | null
          description?: string | null
          dietary_tags?: string[] | null
          difficulty?: string | null
          id?: string
          image_url?: string | null
          instructions?: string
          is_public?: boolean
          likes_count?: number
          name?: string
          prep_time?: number | null
          servings?: number
          updated_at?: string
        }
        Relationships: []
      }
      resource_needs: {
        Row: {
          client_poc: string
          comments: string
          created_at: string
          crm: string
          epl: string
          id: string
          internal_poc: string
          interview_required_by_customer: boolean
          location: string
          opportunity_id: string
          opportunity_name: string
          position_status: string
          proposed_billable_date: string
          ratecard: string
          resource_identified: boolean
          resource_name: string
          role: string
          service_line: string
          skillset: string
          soid: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          client_poc: string
          comments?: string
          created_at?: string
          crm: string
          epl: string
          id?: string
          internal_poc: string
          interview_required_by_customer?: boolean
          location: string
          opportunity_id: string
          opportunity_name: string
          position_status: string
          proposed_billable_date: string
          ratecard: string
          resource_identified?: boolean
          resource_name: string
          role: string
          service_line: string
          skillset: string
          soid: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          client_poc?: string
          comments?: string
          created_at?: string
          crm?: string
          epl?: string
          id?: string
          internal_poc?: string
          interview_required_by_customer?: boolean
          location?: string
          opportunity_id?: string
          opportunity_name?: string
          position_status?: string
          proposed_billable_date?: string
          ratecard?: string
          resource_identified?: boolean
          resource_name?: string
          role?: string
          service_line?: string
          skillset?: string
          soid?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      restaurant_profiles: {
        Row: {
          created_at: string | null
          email: string
          first_name: string
          id: string
          last_name: string
          phone: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          email: string
          first_name: string
          id?: string
          last_name: string
          phone?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          email?: string
          first_name?: string
          id?: string
          last_name?: string
          phone?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      resumes: {
        Row: {
          created_at: string
          education: Json | null
          experience: Json | null
          file_name: string
          file_path: string
          file_size: number
          id: string
          personal_info: Json | null
          processed_at: string | null
          processing_status: string
          raw_text: string | null
          skills: string[] | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          education?: Json | null
          experience?: Json | null
          file_name: string
          file_path: string
          file_size: number
          id?: string
          personal_info?: Json | null
          processed_at?: string | null
          processing_status?: string
          raw_text?: string | null
          skills?: string[] | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          education?: Json | null
          experience?: Json | null
          file_name?: string
          file_path?: string
          file_size?: number
          id?: string
          personal_info?: Json | null
          processed_at?: string | null
          processing_status?: string
          raw_text?: string | null
          skills?: string[] | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      retro_action_items: {
        Row: {
          assignee: string | null
          board_id: string
          card_id: string | null
          created_at: string
          description: string | null
          due_date: string | null
          id: string
          status: string
          title: string
          updated_at: string
        }
        Insert: {
          assignee?: string | null
          board_id: string
          card_id?: string | null
          created_at?: string
          description?: string | null
          due_date?: string | null
          id?: string
          status?: string
          title: string
          updated_at?: string
        }
        Update: {
          assignee?: string | null
          board_id?: string
          card_id?: string | null
          created_at?: string
          description?: string | null
          due_date?: string | null
          id?: string
          status?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      retro_cards: {
        Row: {
          author_name: string | null
          author_session_id: string
          board_id: string
          column_id: string
          content: string
          created_at: string
          id: string
          is_hidden: boolean
          position: number
          updated_at: string
        }
        Insert: {
          author_name?: string | null
          author_session_id: string
          board_id: string
          column_id: string
          content: string
          created_at?: string
          id?: string
          is_hidden?: boolean
          position?: number
          updated_at?: string
        }
        Update: {
          author_name?: string | null
          author_session_id?: string
          board_id?: string
          column_id?: string
          content?: string
          created_at?: string
          id?: string
          is_hidden?: boolean
          position?: number
          updated_at?: string
        }
        Relationships: []
      }
      review_helpful_votes: {
        Row: {
          created_at: string
          id: string
          is_helpful: boolean
          review_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_helpful: boolean
          review_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          is_helpful?: boolean
          review_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "review_helpful_votes_review_id_fkey"
            columns: ["review_id"]
            isOneToOne: false
            referencedRelation: "product_reviews"
            referencedColumns: ["id"]
          },
        ]
      }
      reviews: {
        Row: {
          booking_id: string
          comment: string | null
          created_at: string
          id: string
          property_id: string
          rating: number
          reviewer_id: string
        }
        Insert: {
          booking_id: string
          comment?: string | null
          created_at?: string
          id?: string
          property_id: string
          rating: number
          reviewer_id: string
        }
        Update: {
          booking_id?: string
          comment?: string | null
          created_at?: string
          id?: string
          property_id?: string
          rating?: number
          reviewer_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "reviews_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reviews_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "pet_properties"
            referencedColumns: ["id"]
          },
        ]
      }
      risks: {
        Row: {
          category: string
          created_at: string | null
          description: string | null
          id: string
          impact: string
          mitigation_strategy: string | null
          owner: string | null
          probability: string
          project_id: string | null
          status: string
          title: string
          updated_at: string | null
        }
        Insert: {
          category: string
          created_at?: string | null
          description?: string | null
          id?: string
          impact: string
          mitigation_strategy?: string | null
          owner?: string | null
          probability: string
          project_id?: string | null
          status?: string
          title: string
          updated_at?: string | null
        }
        Update: {
          category?: string
          created_at?: string | null
          description?: string | null
          id?: string
          impact?: string
          mitigation_strategy?: string | null
          owner?: string | null
          probability?: string
          project_id?: string | null
          status?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "risks_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      sap_servers: {
        Row: {
          created_at: string
          description: string | null
          environment: string
          hostname: string
          id: string
          instance_number: string
          is_active: boolean | null
          port: number | null
          server_name: string
          server_type: string
          ssh_host: string
          ssh_port: number | null
          ssh_username: string
          system_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          environment?: string
          hostname: string
          id?: string
          instance_number: string
          is_active?: boolean | null
          port?: number | null
          server_name: string
          server_type?: string
          ssh_host: string
          ssh_port?: number | null
          ssh_username: string
          system_id: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          environment?: string
          hostname?: string
          id?: string
          instance_number?: string
          is_active?: boolean | null
          port?: number | null
          server_name?: string
          server_type?: string
          ssh_host?: string
          ssh_port?: number | null
          ssh_username?: string
          system_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      score_card_acknowledgements: {
        Row: {
          acknowledged_at: string
          acknowledgement_method: string
          comments: string | null
          created_at: string
          id: string
          ip_address: string | null
          score_card_id: string
          user_agent: string | null
          user_id: string
        }
        Insert: {
          acknowledged_at?: string
          acknowledgement_method?: string
          comments?: string | null
          created_at?: string
          id?: string
          ip_address?: string | null
          score_card_id: string
          user_agent?: string | null
          user_id: string
        }
        Update: {
          acknowledged_at?: string
          acknowledgement_method?: string
          comments?: string | null
          created_at?: string
          id?: string
          ip_address?: string | null
          score_card_id?: string
          user_agent?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "score_card_acknowledgements_score_card_id_fkey"
            columns: ["score_card_id"]
            isOneToOne: false
            referencedRelation: "score_cards"
            referencedColumns: ["id"]
          },
        ]
      }
      score_cards: {
        Row: {
          acknowledged_at: string | null
          acknowledgement_token: string | null
          comments: string | null
          created_at: string
          department: string | null
          employee_email: string
          employee_name: string
          evaluation_period: string
          id: string
          manager_email: string | null
          manager_name: string | null
          overall_score: number | null
          scores: Json
          sent_at: string | null
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          acknowledged_at?: string | null
          acknowledgement_token?: string | null
          comments?: string | null
          created_at?: string
          department?: string | null
          employee_email: string
          employee_name: string
          evaluation_period: string
          id?: string
          manager_email?: string | null
          manager_name?: string | null
          overall_score?: number | null
          scores?: Json
          sent_at?: string | null
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          acknowledged_at?: string | null
          acknowledgement_token?: string | null
          comments?: string | null
          created_at?: string
          department?: string | null
          employee_email?: string
          employee_name?: string
          evaluation_period?: string
          id?: string
          manager_email?: string | null
          manager_name?: string | null
          overall_score?: number | null
          scores?: Json
          sent_at?: string | null
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      seat_bookings: {
        Row: {
          booking_date: string
          created_at: string
          end_time: string | null
          id: string
          notes: string | null
          seat_id: string
          start_time: string | null
          status: string
          updated_at: string
          user_email: string | null
          user_id: string
          user_name: string
        }
        Insert: {
          booking_date: string
          created_at?: string
          end_time?: string | null
          id?: string
          notes?: string | null
          seat_id: string
          start_time?: string | null
          status?: string
          updated_at?: string
          user_email?: string | null
          user_id: string
          user_name: string
        }
        Update: {
          booking_date?: string
          created_at?: string
          end_time?: string | null
          id?: string
          notes?: string | null
          seat_id?: string
          start_time?: string | null
          status?: string
          updated_at?: string
          user_email?: string | null
          user_id?: string
          user_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "seat_bookings_seat_id_fkey"
            columns: ["seat_id"]
            isOneToOne: false
            referencedRelation: "seats"
            referencedColumns: ["id"]
          },
        ]
      }
      seat_categories: {
        Row: {
          color: string
          created_at: string
          description: string | null
          id: string
          name: string
        }
        Insert: {
          color?: string
          created_at?: string
          description?: string | null
          id?: string
          name: string
        }
        Update: {
          color?: string
          created_at?: string
          description?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      seat_occupancy_history: {
        Row: {
          created_at: string
          duration_minutes: number | null
          id: string
          occupied_at: string
          seat_id: string
          user_id: string | null
          user_name: string | null
          vacated_at: string | null
        }
        Insert: {
          created_at?: string
          duration_minutes?: number | null
          id?: string
          occupied_at: string
          seat_id: string
          user_id?: string | null
          user_name?: string | null
          vacated_at?: string | null
        }
        Update: {
          created_at?: string
          duration_minutes?: number | null
          id?: string
          occupied_at?: string
          seat_id?: string
          user_id?: string | null
          user_name?: string | null
          vacated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "seat_occupancy_history_seat_id_fkey"
            columns: ["seat_id"]
            isOneToOne: false
            referencedRelation: "seats"
            referencedColumns: ["id"]
          },
        ]
      }
      seats: {
        Row: {
          assigned_user_id: string | null
          category_id: string | null
          created_at: string
          floor_id: string
          id: string
          is_available: boolean
          is_occupied: boolean
          is_reserved: boolean
          last_occupied_at: string | null
          position_x: number
          position_y: number
          seat_number: string
          updated_at: string
        }
        Insert: {
          assigned_user_id?: string | null
          category_id?: string | null
          created_at?: string
          floor_id: string
          id?: string
          is_available?: boolean
          is_occupied?: boolean
          is_reserved?: boolean
          last_occupied_at?: string | null
          position_x?: number
          position_y?: number
          seat_number: string
          updated_at?: string
        }
        Update: {
          assigned_user_id?: string | null
          category_id?: string | null
          created_at?: string
          floor_id?: string
          id?: string
          is_available?: boolean
          is_occupied?: boolean
          is_reserved?: boolean
          last_occupied_at?: string | null
          position_x?: number
          position_y?: number
          seat_number?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "seats_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "seat_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "seats_floor_id_fkey"
            columns: ["floor_id"]
            isOneToOne: false
            referencedRelation: "office_floors"
            referencedColumns: ["id"]
          },
        ]
      }
      server_access: {
        Row: {
          access_level: string | null
          created_at: string | null
          expires_at: string | null
          granted_at: string | null
          granted_by: string | null
          id: string
          is_active: boolean | null
          server_ip: string | null
          server_name: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          access_level?: string | null
          created_at?: string | null
          expires_at?: string | null
          granted_at?: string | null
          granted_by?: string | null
          id?: string
          is_active?: boolean | null
          server_ip?: string | null
          server_name: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          access_level?: string | null
          created_at?: string | null
          expires_at?: string | null
          granted_at?: string | null
          granted_by?: string | null
          id?: string
          is_active?: boolean | null
          server_ip?: string | null
          server_name?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      server_operations: {
        Row: {
          command_executed: string | null
          completed_at: string | null
          created_at: string
          error_message: string | null
          id: string
          operation: string
          output: string | null
          server_id: string
          started_at: string
          status: string
          user_id: string
        }
        Insert: {
          command_executed?: string | null
          completed_at?: string | null
          created_at?: string
          error_message?: string | null
          id?: string
          operation: string
          output?: string | null
          server_id: string
          started_at?: string
          status?: string
          user_id: string
        }
        Update: {
          command_executed?: string | null
          completed_at?: string | null
          created_at?: string
          error_message?: string | null
          id?: string
          operation?: string
          output?: string | null
          server_id?: string
          started_at?: string
          status?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "server_operations_server_id_fkey"
            columns: ["server_id"]
            isOneToOne: false
            referencedRelation: "sap_servers"
            referencedColumns: ["id"]
          },
        ]
      }
      server_status_history: {
        Row: {
          checked_at: string
          cpu_usage: number | null
          created_at: string
          disk_usage: number | null
          error_message: string | null
          id: string
          memory_usage: number | null
          response_time: number | null
          server_id: string
          status: string
        }
        Insert: {
          checked_at?: string
          cpu_usage?: number | null
          created_at?: string
          disk_usage?: number | null
          error_message?: string | null
          id?: string
          memory_usage?: number | null
          response_time?: number | null
          server_id: string
          status: string
        }
        Update: {
          checked_at?: string
          cpu_usage?: number | null
          created_at?: string
          disk_usage?: number | null
          error_message?: string | null
          id?: string
          memory_usage?: number | null
          response_time?: number | null
          server_id?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "server_status_history_server_id_fkey"
            columns: ["server_id"]
            isOneToOne: false
            referencedRelation: "sap_servers"
            referencedColumns: ["id"]
          },
        ]
      }
      services: {
        Row: {
          address: string | null
          created_at: string
          description: string | null
          email: string | null
          hours_of_operation: Json | null
          id: string
          image_url: string | null
          name: string
          phone: string | null
          price_range: string | null
          rating: number | null
          services_offered: string[] | null
          type: string
          updated_at: string
          website: string | null
        }
        Insert: {
          address?: string | null
          created_at?: string
          description?: string | null
          email?: string | null
          hours_of_operation?: Json | null
          id?: string
          image_url?: string | null
          name: string
          phone?: string | null
          price_range?: string | null
          rating?: number | null
          services_offered?: string[] | null
          type: string
          updated_at?: string
          website?: string | null
        }
        Update: {
          address?: string | null
          created_at?: string
          description?: string | null
          email?: string | null
          hours_of_operation?: Json | null
          id?: string
          image_url?: string | null
          name?: string
          phone?: string | null
          price_range?: string | null
          rating?: number | null
          services_offered?: string[] | null
          type?: string
          updated_at?: string
          website?: string | null
        }
        Relationships: []
      }
      shared_list_items: {
        Row: {
          added_by: string
          created_at: string
          id: string
          is_purchased: boolean
          list_id: string
          product_id: string
          purchased_at: string | null
          purchased_by: string | null
          quantity: number
          updated_at: string
          weight_option: string | null
        }
        Insert: {
          added_by: string
          created_at?: string
          id?: string
          is_purchased?: boolean
          list_id: string
          product_id: string
          purchased_at?: string | null
          purchased_by?: string | null
          quantity?: number
          updated_at?: string
          weight_option?: string | null
        }
        Update: {
          added_by?: string
          created_at?: string
          id?: string
          is_purchased?: boolean
          list_id?: string
          product_id?: string
          purchased_at?: string | null
          purchased_by?: string | null
          quantity?: number
          updated_at?: string
          weight_option?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "shared_list_items_list_id_fkey"
            columns: ["list_id"]
            isOneToOne: false
            referencedRelation: "shared_shopping_lists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shared_list_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "grocery_items"
            referencedColumns: ["id"]
          },
        ]
      }
      shared_shopping_lists: {
        Row: {
          created_at: string
          created_by: string
          description: string | null
          id: string
          is_public: boolean
          name: string
          share_code: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by: string
          description?: string | null
          id?: string
          is_public?: boolean
          name: string
          share_code?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string
          description?: string | null
          id?: string
          is_public?: boolean
          name?: string
          share_code?: string
          updated_at?: string
        }
        Relationships: []
      }
      slogans_history: {
        Row: {
          created_at: string
          generated_slogan: string
          id: string
          input_text: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          generated_slogan: string
          id?: string
          input_text: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          generated_slogan?: string
          id?: string
          input_text?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      sprints: {
        Row: {
          created_at: string | null
          end_date: string
          goal: string | null
          id: string
          name: string
          project_id: string | null
          start_date: string
          status: string
          updated_at: string | null
          velocity: number | null
        }
        Insert: {
          created_at?: string | null
          end_date: string
          goal?: string | null
          id?: string
          name: string
          project_id?: string | null
          start_date: string
          status?: string
          updated_at?: string | null
          velocity?: number | null
        }
        Update: {
          created_at?: string | null
          end_date?: string
          goal?: string | null
          id?: string
          name?: string
          project_id?: string | null
          start_date?: string
          status?: string
          updated_at?: string | null
          velocity?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "sprints_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      ssh_credentials: {
        Row: {
          created_at: string
          credential_type: string
          encrypted_value: string
          id: string
          server_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          credential_type?: string
          encrypted_value: string
          id?: string
          server_id: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          credential_type?: string
          encrypted_value?: string
          id?: string
          server_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ssh_credentials_server_id_fkey"
            columns: ["server_id"]
            isOneToOne: false
            referencedRelation: "sap_servers"
            referencedColumns: ["id"]
          },
        ]
      }
      stores: {
        Row: {
          created_at: string
          description: string | null
          id: string
          is_active: boolean | null
          logo_url: string | null
          name: string
          updated_at: string
          website_url: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean | null
          logo_url?: string | null
          name: string
          updated_at?: string
          website_url?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean | null
          logo_url?: string | null
          name?: string
          updated_at?: string
          website_url?: string | null
        }
        Relationships: []
      }
      stories: {
        Row: {
          assignee: string
          created_at: string | null
          description: string | null
          id: string
          priority: string
          project_id: string | null
          status: string
          testing_status: string
          title: string
          updated_at: string | null
        }
        Insert: {
          assignee: string
          created_at?: string | null
          description?: string | null
          id?: string
          priority?: string
          project_id?: string | null
          status?: string
          testing_status?: string
          title: string
          updated_at?: string | null
        }
        Update: {
          assignee?: string
          created_at?: string | null
          description?: string | null
          id?: string
          priority?: string
          project_id?: string | null
          status?: string
          testing_status?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "stories_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      support_tickets: {
        Row: {
          address: string
          assigned_technician_id: string | null
          category: string
          contact_number: string
          country: string
          created_at: string
          id: string
          image_url: string | null
          issue_description: string
          priority: string
          resolved_at: string | null
          status: string
          ticket_number: string
          updated_at: string
          user_id: string
          vehicle_id: string
        }
        Insert: {
          address: string
          assigned_technician_id?: string | null
          category: string
          contact_number: string
          country: string
          created_at?: string
          id?: string
          image_url?: string | null
          issue_description: string
          priority?: string
          resolved_at?: string | null
          status?: string
          ticket_number: string
          updated_at?: string
          user_id: string
          vehicle_id: string
        }
        Update: {
          address?: string
          assigned_technician_id?: string | null
          category?: string
          contact_number?: string
          country?: string
          created_at?: string
          id?: string
          image_url?: string | null
          issue_description?: string
          priority?: string
          resolved_at?: string | null
          status?: string
          ticket_number?: string
          updated_at?: string
          user_id?: string
          vehicle_id?: string
        }
        Relationships: []
      }
      tariffs: {
        Row: {
          connection_fee: number | null
          created_at: string | null
          id: string
          is_active: boolean | null
          name: string
          price_per_kwh: number
          property_id: string | null
          time_based_pricing: Json | null
          updated_at: string | null
          valid_from: string | null
          valid_until: string | null
        }
        Insert: {
          connection_fee?: number | null
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          price_per_kwh: number
          property_id?: string | null
          time_based_pricing?: Json | null
          updated_at?: string | null
          valid_from?: string | null
          valid_until?: string | null
        }
        Update: {
          connection_fee?: number | null
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          price_per_kwh?: number
          property_id?: string | null
          time_based_pricing?: Json | null
          updated_at?: string | null
          valid_from?: string | null
          valid_until?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tariffs_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "charging_properties"
            referencedColumns: ["id"]
          },
        ]
      }
      tasks: {
        Row: {
          category: string
          completed: boolean
          created_at: string
          description: string | null
          due_date: string | null
          id: string
          priority: string
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          category: string
          completed?: boolean
          created_at?: string
          description?: string | null
          due_date?: string | null
          id?: string
          priority: string
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          category?: string
          completed?: boolean
          created_at?: string
          description?: string | null
          due_date?: string | null
          id?: string
          priority?: string
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      tbartistgenre: {
        Row: {
          colartistname: string
          colgenre1: string | null
          colgenre2: string | null
          colgenre3: string | null
          colgenre4: string | null
          colgenre5: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          colartistname: string
          colgenre1?: string | null
          colgenre2?: string | null
          colgenre3?: string | null
          colgenre4?: string | null
          colgenre5?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          colartistname?: string
          colgenre1?: string | null
          colgenre2?: string | null
          colgenre3?: string | null
          colgenre4?: string | null
          colgenre5?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      tblastanalyticsen: {
        Row: {
          colartistname: string
          colsongname: string
          created_at: string
          qtscrobbles: number
          updated_at: string
        }
        Insert: {
          colartistname: string
          colsongname: string
          created_at?: string
          qtscrobbles?: number
          updated_at?: string
        }
        Update: {
          colartistname?: string
          colsongname?: string
          created_at?: string
          qtscrobbles?: number
          updated_at?: string
        }
        Relationships: []
      }
      tbsonggenre: {
        Row: {
          colartistname: string
          colgenre1: string | null
          colgenre2: string | null
          colgenre3: string | null
          colgenre4: string | null
          colgenre5: string | null
          colsongname: string
          created_at: string
          id: string
          updated_at: string
        }
        Insert: {
          colartistname: string
          colgenre1?: string | null
          colgenre2?: string | null
          colgenre3?: string | null
          colgenre4?: string | null
          colgenre5?: string | null
          colsongname: string
          created_at?: string
          id?: string
          updated_at?: string
        }
        Update: {
          colartistname?: string
          colgenre1?: string | null
          colgenre2?: string | null
          colgenre3?: string | null
          colgenre4?: string | null
          colgenre5?: string | null
          colsongname?: string
          created_at?: string
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      tbsongnameuserscrobble: {
        Row: {
          colartistname: string
          collastfmusername: string
          colscrobbles: number
          created_at: string
          id: string
          solsongname: string
          updated_at: string
        }
        Insert: {
          colartistname: string
          collastfmusername: string
          colscrobbles?: number
          created_at?: string
          id?: string
          solsongname: string
          updated_at?: string
        }
        Update: {
          colartistname?: string
          collastfmusername?: string
          colscrobbles?: number
          created_at?: string
          id?: string
          solsongname?: string
          updated_at?: string
        }
        Relationships: []
      }
      team_assignments: {
        Row: {
          assigned_by: string | null
          created_at: string | null
          id: string
          project_id: string | null
          supervisor_id: string | null
          user_id: string | null
        }
        Insert: {
          assigned_by?: string | null
          created_at?: string | null
          id?: string
          project_id?: string | null
          supervisor_id?: string | null
          user_id?: string | null
        }
        Update: {
          assigned_by?: string | null
          created_at?: string | null
          id?: string
          project_id?: string | null
          supervisor_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "team_assignments_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      team_members: {
        Row: {
          created_at: string
          id: string
          is_active: boolean | null
          is_captain: boolean | null
          jersey_number: number | null
          joined_date: string | null
          player_id: string
          position: Database["public"]["Enums"]["player_position"] | null
          team_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_active?: boolean | null
          is_captain?: boolean | null
          jersey_number?: number | null
          joined_date?: string | null
          player_id: string
          position?: Database["public"]["Enums"]["player_position"] | null
          team_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          is_active?: boolean | null
          is_captain?: boolean | null
          jersey_number?: number | null
          joined_date?: string | null
          player_id?: string
          position?: Database["public"]["Enums"]["player_position"] | null
          team_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "team_members_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      team_mood_analysis: {
        Row: {
          analysis_date: string
          channel_id: string
          created_at: string
          id: string
          insights: string[] | null
          message_count: number
          negative_count: number
          neutral_count: number
          nudges: Json | null
          overall_mood: string
          positive_count: number
          team_id: string
          time_range: string
          updated_at: string
          user_id: string
        }
        Insert: {
          analysis_date?: string
          channel_id: string
          created_at?: string
          id?: string
          insights?: string[] | null
          message_count?: number
          negative_count?: number
          neutral_count?: number
          nudges?: Json | null
          overall_mood: string
          positive_count?: number
          team_id: string
          time_range?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          analysis_date?: string
          channel_id?: string
          created_at?: string
          id?: string
          insights?: string[] | null
          message_count?: number
          negative_count?: number
          neutral_count?: number
          nudges?: Json | null
          overall_mood?: string
          positive_count?: number
          team_id?: string
          time_range?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      team_stats: {
        Row: {
          clean_sheets: number | null
          created_at: string
          draws: number | null
          goals_against: number | null
          goals_for: number | null
          id: string
          losses: number | null
          matches_played: number | null
          season: string
          team_id: string
          updated_at: string
          wins: number | null
        }
        Insert: {
          clean_sheets?: number | null
          created_at?: string
          draws?: number | null
          goals_against?: number | null
          goals_for?: number | null
          id?: string
          losses?: number | null
          matches_played?: number | null
          season: string
          team_id: string
          updated_at?: string
          wins?: number | null
        }
        Update: {
          clean_sheets?: number | null
          created_at?: string
          draws?: number | null
          goals_against?: number | null
          goals_for?: number | null
          id?: string
          losses?: number | null
          matches_played?: number | null
          season?: string
          team_id?: string
          updated_at?: string
          wins?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "team_stats_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      teams: {
        Row: {
          created_at: string
          description: string | null
          draws: number | null
          founded_date: string | null
          goals_against: number | null
          goals_for: number | null
          id: string
          logo_url: string | null
          losses: number | null
          manager_id: string | null
          name: string
          status: Database["public"]["Enums"]["team_status"] | null
          total_players: number | null
          updated_at: string
          wins: number | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          draws?: number | null
          founded_date?: string | null
          goals_against?: number | null
          goals_for?: number | null
          id?: string
          logo_url?: string | null
          losses?: number | null
          manager_id?: string | null
          name: string
          status?: Database["public"]["Enums"]["team_status"] | null
          total_players?: number | null
          updated_at?: string
          wins?: number | null
        }
        Update: {
          created_at?: string
          description?: string | null
          draws?: number | null
          founded_date?: string | null
          goals_against?: number | null
          goals_for?: number | null
          id?: string
          logo_url?: string | null
          losses?: number | null
          manager_id?: string | null
          name?: string
          status?: Database["public"]["Enums"]["team_status"] | null
          total_players?: number | null
          updated_at?: string
          wins?: number | null
        }
        Relationships: []
      }
      test_cases: {
        Row: {
          actual_result: string | null
          created_at: string | null
          description: string | null
          expected_result: string | null
          id: string
          priority: string
          project_id: string | null
          status: string
          steps: string[] | null
          story_id: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          actual_result?: string | null
          created_at?: string | null
          description?: string | null
          expected_result?: string | null
          id?: string
          priority?: string
          project_id?: string | null
          status?: string
          steps?: string[] | null
          story_id?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          actual_result?: string | null
          created_at?: string | null
          description?: string | null
          expected_result?: string | null
          id?: string
          priority?: string
          project_id?: string | null
          status?: string
          steps?: string[] | null
          story_id?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "test_cases_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "test_cases_story_id_fkey"
            columns: ["story_id"]
            isOneToOne: false
            referencedRelation: "user_stories"
            referencedColumns: ["id"]
          },
        ]
      }
      test_configurations: {
        Row: {
          created_at: string
          description: string | null
          destinations: Json
          id: string
          is_active: boolean | null
          name: string
          source_server: string | null
          timeout_seconds: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          destinations: Json
          id?: string
          is_active?: boolean | null
          name: string
          source_server?: string | null
          timeout_seconds?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          destinations?: Json
          id?: string
          is_active?: boolean | null
          name?: string
          source_server?: string | null
          timeout_seconds?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      test_items: {
        Row: {
          category_id: string | null
          created_at: string
          folder: string | null
          id: string
          numbers: string[] | null
          priority: string | null
          status: string | null
          submission_status: string | null
          tagged_controls: string[] | null
          text: string
          updated_at: string
          user_id: string
        }
        Insert: {
          category_id?: string | null
          created_at?: string
          folder?: string | null
          id?: string
          numbers?: string[] | null
          priority?: string | null
          status?: string | null
          submission_status?: string | null
          tagged_controls?: string[] | null
          text: string
          updated_at?: string
          user_id: string
        }
        Update: {
          category_id?: string | null
          created_at?: string
          folder?: string | null
          id?: string
          numbers?: string[] | null
          priority?: string | null
          status?: string | null
          submission_status?: string | null
          tagged_controls?: string[] | null
          text?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "test_items_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      ticket_data: {
        Row: {
          analytics_id: string
          created_at: string
          date: string
          employee_name: string
          id: string
          issue: string
          team: string
          ticket_id: string
          ticket_status: string
        }
        Insert: {
          analytics_id: string
          created_at?: string
          date: string
          employee_name: string
          id?: string
          issue: string
          team: string
          ticket_id: string
          ticket_status: string
        }
        Update: {
          analytics_id?: string
          created_at?: string
          date?: string
          employee_name?: string
          id?: string
          issue?: string
          team?: string
          ticket_id?: string
          ticket_status?: string
        }
        Relationships: [
          {
            foreignKeyName: "ticket_data_analytics_id_fkey"
            columns: ["analytics_id"]
            isOneToOne: false
            referencedRelation: "performance_analytics"
            referencedColumns: ["id"]
          },
        ]
      }
      ticket_notes: {
        Row: {
          author_id: string
          content: string
          created_at: string
          id: string
          is_internal: boolean
          note_type: string
          ticket_id: string
        }
        Insert: {
          author_id: string
          content: string
          created_at?: string
          id?: string
          is_internal?: boolean
          note_type?: string
          ticket_id: string
        }
        Update: {
          author_id?: string
          content?: string
          created_at?: string
          id?: string
          is_internal?: boolean
          note_type?: string
          ticket_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ticket_notes_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "ticket_notes_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "tickets"
            referencedColumns: ["id"]
          },
        ]
      }
      ticket_troubleshooting_history: {
        Row: {
          completed_at: string
          id: string
          outcome: string
          ticket_id: string
          troubleshooting_step_id: string
          was_successful: boolean
        }
        Insert: {
          completed_at?: string
          id?: string
          outcome: string
          ticket_id: string
          troubleshooting_step_id: string
          was_successful?: boolean
        }
        Update: {
          completed_at?: string
          id?: string
          outcome?: string
          ticket_id?: string
          troubleshooting_step_id?: string
          was_successful?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "ticket_troubleshooting_history_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "tickets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_troubleshooting_history_troubleshooting_step_id_fkey"
            columns: ["troubleshooting_step_id"]
            isOneToOne: false
            referencedRelation: "troubleshooting_steps"
            referencedColumns: ["id"]
          },
        ]
      }
      tickets: {
        Row: {
          category_id: string | null
          created_at: string
          description: string
          driver_id: string
          id: string
          is_auto_resolved: boolean
          priority: Database["public"]["Enums"]["ticket_priority"]
          resolution_notes: string | null
          resolved_at: string | null
          status: Database["public"]["Enums"]["ticket_status"]
          technician_id: string | null
          ticket_number: string
          title: string
          updated_at: string
        }
        Insert: {
          category_id?: string | null
          created_at?: string
          description: string
          driver_id: string
          id?: string
          is_auto_resolved?: boolean
          priority?: Database["public"]["Enums"]["ticket_priority"]
          resolution_notes?: string | null
          resolved_at?: string | null
          status?: Database["public"]["Enums"]["ticket_status"]
          technician_id?: string | null
          ticket_number: string
          title: string
          updated_at?: string
        }
        Update: {
          category_id?: string | null
          created_at?: string
          description?: string
          driver_id?: string
          id?: string
          is_auto_resolved?: boolean
          priority?: Database["public"]["Enums"]["ticket_priority"]
          resolution_notes?: string | null
          resolved_at?: string | null
          status?: Database["public"]["Enums"]["ticket_status"]
          technician_id?: string | null
          ticket_number?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "tickets_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "troubleshooting_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tickets_driver_id_fkey"
            columns: ["driver_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "tickets_technician_id_fkey"
            columns: ["technician_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      transaction_uploads: {
        Row: {
          created_at: string
          error_message: string | null
          file_path: string
          file_size: number
          filename: string
          id: string
          processed_rows: number | null
          status: string
          total_rows: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          error_message?: string | null
          file_path: string
          file_size: number
          filename: string
          id?: string
          processed_rows?: number | null
          status?: string
          total_rows?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          error_message?: string | null
          file_path?: string
          file_size?: number
          filename?: string
          id?: string
          processed_rows?: number | null
          status?: string
          total_rows?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      transactions: {
        Row: {
          amount: number
          category: string
          created_at: string
          date: string
          description: string | null
          id: string
          type: string
          updated_at: string
          user_id: string
        }
        Insert: {
          amount: number
          category: string
          created_at?: string
          date?: string
          description?: string | null
          id?: string
          type: string
          updated_at?: string
          user_id: string
        }
        Update: {
          amount?: number
          category?: string
          created_at?: string
          date?: string
          description?: string | null
          id?: string
          type?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      troubleshooting_categories: {
        Row: {
          created_at: string
          description: string | null
          id: string
          is_active: boolean
          name: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          name: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          name?: string
        }
        Relationships: []
      }
      troubleshooting_steps: {
        Row: {
          category_id: string
          created_at: string
          expected_outcome: string | null
          id: string
          is_active: boolean
          issue_description: string
          step_instructions: string
          step_number: number
          step_title: string
          updated_at: string
        }
        Insert: {
          category_id: string
          created_at?: string
          expected_outcome?: string | null
          id?: string
          is_active?: boolean
          issue_description: string
          step_instructions: string
          step_number: number
          step_title: string
          updated_at?: string
        }
        Update: {
          category_id?: string
          created_at?: string
          expected_outcome?: string | null
          id?: string
          is_active?: boolean
          issue_description?: string
          step_instructions?: string
          step_number?: number
          step_title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "troubleshooting_steps_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "troubleshooting_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      user_addresses: {
        Row: {
          address_line1: string
          address_line2: string | null
          city: string
          country: string | null
          created_at: string
          id: string
          is_default: boolean | null
          name: string
          phone: string
          postal_code: string
          state: string
          type: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          address_line1: string
          address_line2?: string | null
          city: string
          country?: string | null
          created_at?: string
          id?: string
          is_default?: boolean | null
          name: string
          phone: string
          postal_code: string
          state: string
          type?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          address_line1?: string
          address_line2?: string | null
          city?: string
          country?: string | null
          created_at?: string
          id?: string
          is_default?: boolean | null
          name?: string
          phone?: string
          postal_code?: string
          state?: string
          type?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      user_favorites: {
        Row: {
          created_at: string
          grocery_item_id: string
          id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          grocery_item_id: string
          id?: string
          user_id: string
        }
        Update: {
          created_at?: string
          grocery_item_id?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_favorites_grocery_item_id_fkey"
            columns: ["grocery_item_id"]
            isOneToOne: false
            referencedRelation: "grocery_items"
            referencedColumns: ["id"]
          },
        ]
      }
      user_preferences: {
        Row: {
          activity_tracking: boolean
          break_duration: number
          break_enabled: boolean
          break_frequency: number
          created_at: string
          hydration_enabled: boolean
          hydration_end_time: string
          hydration_frequency: number
          hydration_goal: number
          hydration_start_time: string
          id: string
          location_based_reminders: boolean
          mindfulness_duration: number
          mindfulness_enabled: boolean
          mindfulness_frequency: number
          mindfulness_types: string[] | null
          notifications_enabled: boolean
          posture_enabled: boolean
          posture_frequency: number
          posture_sensitivity: string
          quiet_hours_end: string | null
          quiet_hours_start: string | null
          smart_timing: boolean
          updated_at: string
          user_id: string
          weekend_mode: boolean
        }
        Insert: {
          activity_tracking?: boolean
          break_duration?: number
          break_enabled?: boolean
          break_frequency?: number
          created_at?: string
          hydration_enabled?: boolean
          hydration_end_time?: string
          hydration_frequency?: number
          hydration_goal?: number
          hydration_start_time?: string
          id?: string
          location_based_reminders?: boolean
          mindfulness_duration?: number
          mindfulness_enabled?: boolean
          mindfulness_frequency?: number
          mindfulness_types?: string[] | null
          notifications_enabled?: boolean
          posture_enabled?: boolean
          posture_frequency?: number
          posture_sensitivity?: string
          quiet_hours_end?: string | null
          quiet_hours_start?: string | null
          smart_timing?: boolean
          updated_at?: string
          user_id: string
          weekend_mode?: boolean
        }
        Update: {
          activity_tracking?: boolean
          break_duration?: number
          break_enabled?: boolean
          break_frequency?: number
          created_at?: string
          hydration_enabled?: boolean
          hydration_end_time?: string
          hydration_frequency?: number
          hydration_goal?: number
          hydration_start_time?: string
          id?: string
          location_based_reminders?: boolean
          mindfulness_duration?: number
          mindfulness_enabled?: boolean
          mindfulness_frequency?: number
          mindfulness_types?: string[] | null
          notifications_enabled?: boolean
          posture_enabled?: boolean
          posture_frequency?: number
          posture_sensitivity?: string
          quiet_hours_end?: string | null
          quiet_hours_start?: string | null
          smart_timing?: boolean
          updated_at?: string
          user_id?: string
          weekend_mode?: boolean
        }
        Relationships: []
      }
      user_profiles: {
        Row: {
          account_locked: boolean | null
          address: string | null
          address_line_1: string | null
          address_line_2: string | null
          annual_income_range: string | null
          avatar_url: string | null
          bio: string | null
          biometric_enabled: boolean | null
          city: string | null
          country: string | null
          created_at: string
          date_of_birth: string | null
          department: string | null
          email: string | null
          ev_user_type: Database["public"]["Enums"]["ev_user_type"] | null
          first_name: string
          id: string
          is_organization: boolean | null
          is_verified: boolean | null
          is_volunteer: boolean | null
          kyc_status: string | null
          language_preference: string | null
          last_login_at: string | null
          last_name: string
          marketing_emails: boolean | null
          nationality: string | null
          occupation: string | null
          organization_name: string | null
          phone: string | null
          postal_code: string | null
          preferred_payment_channel: string | null
          security_alerts: boolean | null
          theme_preference: string | null
          timezone: string | null
          transaction_notifications: boolean | null
          two_factor_enabled: boolean | null
          updated_at: string
          user_id: string
          verification_status: string | null
        }
        Insert: {
          account_locked?: boolean | null
          address?: string | null
          address_line_1?: string | null
          address_line_2?: string | null
          annual_income_range?: string | null
          avatar_url?: string | null
          bio?: string | null
          biometric_enabled?: boolean | null
          city?: string | null
          country?: string | null
          created_at?: string
          date_of_birth?: string | null
          department?: string | null
          email?: string | null
          ev_user_type?: Database["public"]["Enums"]["ev_user_type"] | null
          first_name: string
          id?: string
          is_organization?: boolean | null
          is_verified?: boolean | null
          is_volunteer?: boolean | null
          kyc_status?: string | null
          language_preference?: string | null
          last_login_at?: string | null
          last_name: string
          marketing_emails?: boolean | null
          nationality?: string | null
          occupation?: string | null
          organization_name?: string | null
          phone?: string | null
          postal_code?: string | null
          preferred_payment_channel?: string | null
          security_alerts?: boolean | null
          theme_preference?: string | null
          timezone?: string | null
          transaction_notifications?: boolean | null
          two_factor_enabled?: boolean | null
          updated_at?: string
          user_id: string
          verification_status?: string | null
        }
        Update: {
          account_locked?: boolean | null
          address?: string | null
          address_line_1?: string | null
          address_line_2?: string | null
          annual_income_range?: string | null
          avatar_url?: string | null
          bio?: string | null
          biometric_enabled?: boolean | null
          city?: string | null
          country?: string | null
          created_at?: string
          date_of_birth?: string | null
          department?: string | null
          email?: string | null
          ev_user_type?: Database["public"]["Enums"]["ev_user_type"] | null
          first_name?: string
          id?: string
          is_organization?: boolean | null
          is_verified?: boolean | null
          is_volunteer?: boolean | null
          kyc_status?: string | null
          language_preference?: string | null
          last_login_at?: string | null
          last_name?: string
          marketing_emails?: boolean | null
          nationality?: string | null
          occupation?: string | null
          organization_name?: string | null
          phone?: string | null
          postal_code?: string | null
          preferred_payment_channel?: string | null
          security_alerts?: boolean | null
          theme_preference?: string | null
          timezone?: string | null
          transaction_notifications?: boolean | null
          two_factor_enabled?: boolean | null
          updated_at?: string
          user_id?: string
          verification_status?: string | null
        }
        Relationships: []
      }
      user_progress: {
        Row: {
          attempts: number
          completed: boolean
          completed_at: string | null
          created_at: string
          id: string
          last_practiced_at: string | null
          lesson_id: string
          practice_time_seconds: number
          progress_percent: number
          updated_at: string
          user_id: string
        }
        Insert: {
          attempts?: number
          completed?: boolean
          completed_at?: string | null
          created_at?: string
          id?: string
          last_practiced_at?: string | null
          lesson_id: string
          practice_time_seconds?: number
          progress_percent?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          attempts?: number
          completed?: boolean
          completed_at?: string | null
          created_at?: string
          id?: string
          last_practiced_at?: string | null
          lesson_id?: string
          practice_time_seconds?: number
          progress_percent?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_progress_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["user_role"]
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_settings: {
        Row: {
          audio_speed: number
          created_at: string
          current_difficulty: string
          font_size: string
          high_contrast_mode: boolean
          id: string
          preferred_language: string
          reduced_motion: boolean
          updated_at: string
          user_id: string
          visual_feedback_enabled: boolean
        }
        Insert: {
          audio_speed?: number
          created_at?: string
          current_difficulty?: string
          font_size?: string
          high_contrast_mode?: boolean
          id?: string
          preferred_language?: string
          reduced_motion?: boolean
          updated_at?: string
          user_id: string
          visual_feedback_enabled?: boolean
        }
        Update: {
          audio_speed?: number
          created_at?: string
          current_difficulty?: string
          font_size?: string
          high_contrast_mode?: boolean
          id?: string
          preferred_language?: string
          reduced_motion?: boolean
          updated_at?: string
          user_id?: string
          visual_feedback_enabled?: boolean
        }
        Relationships: []
      }
      user_stories: {
        Row: {
          acceptance_criteria: string[] | null
          assignee: string | null
          created_at: string | null
          description: string | null
          id: string
          priority: string
          project_id: string | null
          sprint_id: string | null
          status: string
          story_points: number | null
          title: string
          updated_at: string | null
        }
        Insert: {
          acceptance_criteria?: string[] | null
          assignee?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          priority?: string
          project_id?: string | null
          sprint_id?: string | null
          status?: string
          story_points?: number | null
          title: string
          updated_at?: string | null
        }
        Update: {
          acceptance_criteria?: string[] | null
          assignee?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          priority?: string
          project_id?: string | null
          sprint_id?: string | null
          status?: string
          story_points?: number | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_stories_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_stories_sprint_id_fkey"
            columns: ["sprint_id"]
            isOneToOne: false
            referencedRelation: "sprints"
            referencedColumns: ["id"]
          },
        ]
      }
      validation_documents: {
        Row: {
          approval_status: string | null
          approver1_comments: string | null
          approver1_reviewed_at: string | null
          approver1_status: string | null
          approver2_comments: string | null
          approver2_reviewed_at: string | null
          approver2_status: string | null
          assigned_approver_id: string | null
          assigned_approver2_id: string | null
          assigned_reviewer_id: string | null
          change_request_id: string
          comments: string | null
          created_at: string
          document_name: string
          document_type: string
          file_name: string | null
          file_path: string | null
          file_size: number | null
          id: string
          reviewed_at: string | null
          reviewed_by: string | null
          reviewer_type: string
          status: string
          updated_at: string
          uploaded_at: string | null
          workflow_stage: string | null
        }
        Insert: {
          approval_status?: string | null
          approver1_comments?: string | null
          approver1_reviewed_at?: string | null
          approver1_status?: string | null
          approver2_comments?: string | null
          approver2_reviewed_at?: string | null
          approver2_status?: string | null
          assigned_approver_id?: string | null
          assigned_approver2_id?: string | null
          assigned_reviewer_id?: string | null
          change_request_id: string
          comments?: string | null
          created_at?: string
          document_name: string
          document_type: string
          file_name?: string | null
          file_path?: string | null
          file_size?: number | null
          id?: string
          reviewed_at?: string | null
          reviewed_by?: string | null
          reviewer_type: string
          status?: string
          updated_at?: string
          uploaded_at?: string | null
          workflow_stage?: string | null
        }
        Update: {
          approval_status?: string | null
          approver1_comments?: string | null
          approver1_reviewed_at?: string | null
          approver1_status?: string | null
          approver2_comments?: string | null
          approver2_reviewed_at?: string | null
          approver2_status?: string | null
          assigned_approver_id?: string | null
          assigned_approver2_id?: string | null
          assigned_reviewer_id?: string | null
          change_request_id?: string
          comments?: string | null
          created_at?: string
          document_name?: string
          document_type?: string
          file_name?: string | null
          file_path?: string | null
          file_size?: number | null
          id?: string
          reviewed_at?: string | null
          reviewed_by?: string | null
          reviewer_type?: string
          status?: string
          updated_at?: string
          uploaded_at?: string | null
          workflow_stage?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_assigned_approver"
            columns: ["assigned_approver_id"]
            isOneToOne: false
            referencedRelation: "application_stakeholders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_assigned_reviewer"
            columns: ["assigned_reviewer_id"]
            isOneToOne: false
            referencedRelation: "application_stakeholders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "validation_documents_change_request_id_fkey"
            columns: ["change_request_id"]
            isOneToOne: false
            referencedRelation: "application_change_requests"
            referencedColumns: ["id"]
          },
        ]
      }
      validation_records: {
        Row: {
          actual_end_date: string | null
          actual_start_date: string | null
          application_id: string
          approver: string | null
          conclusion: string | null
          created_at: string | null
          deviations: string | null
          id: string
          planned_end_date: string | null
          planned_start_date: string | null
          protocol_number: string | null
          protocol_title: string
          test_environment: string | null
          test_results: string | null
          updated_at: string | null
          validation_owner: string | null
          validation_status: string
          validation_type: string
        }
        Insert: {
          actual_end_date?: string | null
          actual_start_date?: string | null
          application_id: string
          approver?: string | null
          conclusion?: string | null
          created_at?: string | null
          deviations?: string | null
          id?: string
          planned_end_date?: string | null
          planned_start_date?: string | null
          protocol_number?: string | null
          protocol_title: string
          test_environment?: string | null
          test_results?: string | null
          updated_at?: string | null
          validation_owner?: string | null
          validation_status?: string
          validation_type: string
        }
        Update: {
          actual_end_date?: string | null
          actual_start_date?: string | null
          application_id?: string
          approver?: string | null
          conclusion?: string | null
          created_at?: string | null
          deviations?: string | null
          id?: string
          planned_end_date?: string | null
          planned_start_date?: string | null
          protocol_number?: string | null
          protocol_title?: string
          test_environment?: string | null
          test_results?: string | null
          updated_at?: string | null
          validation_owner?: string | null
          validation_status?: string
          validation_type?: string
        }
        Relationships: []
      }
      verification_documents: {
        Row: {
          document_type: string
          document_url: string
          id: string
          notes: string | null
          uploaded_at: string
          user_id: string
          verification_status: string | null
          verified_at: string | null
        }
        Insert: {
          document_type: string
          document_url: string
          id?: string
          notes?: string | null
          uploaded_at?: string
          user_id: string
          verification_status?: string | null
          verified_at?: string | null
        }
        Update: {
          document_type?: string
          document_url?: string
          id?: string
          notes?: string | null
          uploaded_at?: string
          user_id?: string
          verification_status?: string | null
          verified_at?: string | null
        }
        Relationships: []
      }
      votes: {
        Row: {
          card_id: string
          created_at: string
          id: string
          voter_session_id: string
        }
        Insert: {
          card_id: string
          created_at?: string
          id?: string
          voter_session_id: string
        }
        Update: {
          card_id?: string
          created_at?: string
          id?: string
          voter_session_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "votes_retro_card_id_fkey"
            columns: ["card_id"]
            isOneToOne: false
            referencedRelation: "retro_cards"
            referencedColumns: ["id"]
          },
        ]
      }
      wellness_nudges: {
        Row: {
          action_text: string | null
          action_url: string | null
          completed_at: string | null
          created_at: string
          delivered_at: string | null
          dismissed_at: string | null
          id: string
          is_read: boolean
          message: string
          metadata: Json | null
          priority: number
          scheduled_for: string | null
          title: string
          type: string
          updated_at: string
          user_id: string
        }
        Insert: {
          action_text?: string | null
          action_url?: string | null
          completed_at?: string | null
          created_at?: string
          delivered_at?: string | null
          dismissed_at?: string | null
          id?: string
          is_read?: boolean
          message: string
          metadata?: Json | null
          priority?: number
          scheduled_for?: string | null
          title: string
          type: string
          updated_at?: string
          user_id: string
        }
        Update: {
          action_text?: string | null
          action_url?: string | null
          completed_at?: string | null
          created_at?: string
          delivered_at?: string | null
          dismissed_at?: string | null
          id?: string
          is_read?: boolean
          message?: string
          metadata?: Json | null
          priority?: number
          scheduled_for?: string | null
          title?: string
          type?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      wellness_tasks: {
        Row: {
          category: string
          completed_at: string | null
          created_at: string
          description: string | null
          due_date: string | null
          estimated_duration: number | null
          id: string
          last_reminded_at: string | null
          metadata: Json | null
          priority: string
          reminder_frequency: number | null
          status: string
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          category: string
          completed_at?: string | null
          created_at?: string
          description?: string | null
          due_date?: string | null
          estimated_duration?: number | null
          id?: string
          last_reminded_at?: string | null
          metadata?: Json | null
          priority?: string
          reminder_frequency?: number | null
          status?: string
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          category?: string
          completed_at?: string | null
          created_at?: string
          description?: string | null
          due_date?: string | null
          estimated_duration?: number | null
          id?: string
          last_reminded_at?: string | null
          metadata?: Json | null
          priority?: string
          reminder_frequency?: number | null
          status?: string
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      workflow_steps: {
        Row: {
          assignee: string | null
          completed_date: string | null
          created_at: string
          deliverables: string[] | null
          dependencies: string[] | null
          due_date: string | null
          id: string
          notes: string | null
          start_date: string | null
          status: string
          step_description: string | null
          step_name: string
          step_order: number
          updated_at: string
          workflow_id: string
        }
        Insert: {
          assignee?: string | null
          completed_date?: string | null
          created_at?: string
          deliverables?: string[] | null
          dependencies?: string[] | null
          due_date?: string | null
          id?: string
          notes?: string | null
          start_date?: string | null
          status?: string
          step_description?: string | null
          step_name: string
          step_order: number
          updated_at?: string
          workflow_id: string
        }
        Update: {
          assignee?: string | null
          completed_date?: string | null
          created_at?: string
          deliverables?: string[] | null
          dependencies?: string[] | null
          due_date?: string | null
          id?: string
          notes?: string | null
          start_date?: string | null
          status?: string
          step_description?: string | null
          step_name?: string
          step_order?: number
          updated_at?: string
          workflow_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "workflow_steps_workflow_id_fkey"
            columns: ["workflow_id"]
            isOneToOne: false
            referencedRelation: "workflows"
            referencedColumns: ["id"]
          },
        ]
      }
      workflows: {
        Row: {
          application_id: string
          completed_at: string | null
          created_at: string
          created_by: string | null
          description: string | null
          id: string
          metadata: Json | null
          name: string
          progress: number
          project_id: string | null
          started_at: string | null
          status: string
          updated_at: string
          workflow_id: string | null
          workflow_subtype: string | null
          workflow_type: string
        }
        Insert: {
          application_id: string
          completed_at?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          metadata?: Json | null
          name: string
          progress?: number
          project_id?: string | null
          started_at?: string | null
          status?: string
          updated_at?: string
          workflow_id?: string | null
          workflow_subtype?: string | null
          workflow_type: string
        }
        Update: {
          application_id?: string
          completed_at?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          metadata?: Json | null
          name?: string
          progress?: number
          project_id?: string | null
          started_at?: string | null
          status?: string
          updated_at?: string
          workflow_id?: string | null
          workflow_subtype?: string | null
          workflow_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "workflows_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workflows_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      workforce_scenarios: {
        Row: {
          agents_list: Json
          aht: number
          asa: number
          created_at: string
          hourly_volumes: Json
          id: string
          name: string
          shrinkage: number
          total_agents: number
          updated_at: string
          user_id: string | null
          utilization: number
        }
        Insert: {
          agents_list?: Json
          aht?: number
          asa?: number
          created_at?: string
          hourly_volumes?: Json
          id?: string
          name: string
          shrinkage?: number
          total_agents: number
          updated_at?: string
          user_id?: string | null
          utilization?: number
        }
        Update: {
          agents_list?: Json
          aht?: number
          asa?: number
          created_at?: string
          hourly_volumes?: Json
          id?: string
          name?: string
          shrinkage?: number
          total_agents?: number
          updated_at?: string
          user_id?: string | null
          utilization?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      add_sample_server_access: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      add_server_access_for_user: {
        Args: { target_email: string }
        Returns: boolean
      }
      assign_user_role: {
        Args: {
          _target_user_id: string
          _role: Database["public"]["Enums"]["user_role"]
        }
        Returns: boolean
      }
      calculate_productivity_metrics: {
        Args: { target_user_id: string; target_date: string }
        Returns: undefined
      }
      can_access_profile: {
        Args: { profile_user_id: string }
        Returns: boolean
      }
      create_first_admin: {
        Args: { admin_email: string }
        Returns: boolean
      }
      generate_acknowledgement_token: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      generate_application_id: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      generate_board_id: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      generate_certificate_alerts: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      generate_change_id: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      generate_change_request_number: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      generate_order_number: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      generate_project_id: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      generate_ticket_number: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      generate_workflow_id: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_user_role: {
        Args: { _user_id: string }
        Returns: Database["public"]["Enums"]["user_role"]
      }
      has_role: {
        Args: {
          _user_id: string
          _role: Database["public"]["Enums"]["user_role"]
        }
        Returns: boolean
      }
      insert_holding: {
        Args: {
          p_user_id: string
          p_symbol: string
          p_name: string
          p_type: string
          p_shares: number
          p_avg_cost: number
          p_purchase_date?: string
        }
        Returns: {
          id: string
          symbol: string
          message: string
        }[]
      }
      is_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      is_doctor: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      promote_to_admin: {
        Args: { target_email: string }
        Returns: boolean
      }
      remove_user_role: {
        Args: {
          _target_user_id: string
          _role: Database["public"]["Enums"]["user_role"]
        }
        Returns: boolean
      }
      update_domain_status: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
    }
    Enums: {
      award_category:
        | "most_complex_program"
        | "innovative_solution"
        | "comeback_of_year"
        | "best_digital_transformation"
      delivery_rating: "excellent" | "good" | "average" | "poor"
      delivery_status: "pending" | "in_progress" | "completed" | "cancelled"
      ev_user_type: "homeowner" | "driver" | "admin"
      fixture_status:
        | "scheduled"
        | "in_progress"
        | "completed"
        | "cancelled"
        | "postponed"
      player_position:
        | "goalkeeper"
        | "defender"
        | "midfielder"
        | "forward"
        | "substitute"
      question_type: "multiple_choice" | "true_false" | "short_answer"
      reviewer_type: "business" | "itqc" | "validation" | "qa"
      team_status: "active" | "inactive" | "disbanded"
      ticket_priority: "low" | "medium" | "high" | "critical"
      ticket_status:
        | "new"
        | "pending"
        | "assigned"
        | "in_progress"
        | "awaiting_driver_response"
        | "awaiting_part"
        | "field_trip_planned"
        | "resolved"
        | "auto_closed"
      user_role: "admin" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      award_category: [
        "most_complex_program",
        "innovative_solution",
        "comeback_of_year",
        "best_digital_transformation",
      ],
      delivery_rating: ["excellent", "good", "average", "poor"],
      delivery_status: ["pending", "in_progress", "completed", "cancelled"],
      ev_user_type: ["homeowner", "driver", "admin"],
      fixture_status: [
        "scheduled",
        "in_progress",
        "completed",
        "cancelled",
        "postponed",
      ],
      player_position: [
        "goalkeeper",
        "defender",
        "midfielder",
        "forward",
        "substitute",
      ],
      question_type: ["multiple_choice", "true_false", "short_answer"],
      reviewer_type: ["business", "itqc", "validation", "qa"],
      team_status: ["active", "inactive", "disbanded"],
      ticket_priority: ["low", "medium", "high", "critical"],
      ticket_status: [
        "new",
        "pending",
        "assigned",
        "in_progress",
        "awaiting_driver_response",
        "awaiting_part",
        "field_trip_planned",
        "resolved",
        "auto_closed",
      ],
      user_role: ["admin", "user"],
    },
  },
} as const
